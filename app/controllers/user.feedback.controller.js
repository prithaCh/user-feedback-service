//Initialize dependencies
const db = require("../models");

//Initialize Mongo collections
const UserFeedback = db.userFeedback;

//----------------- Operations to capture User feedback ------------------//

//Create a new user feedback record
exports.create = (req, res) => {

	console.log(req.body);
	//Validate request
	if(!req.body) {
		res.status(400).send({ message: "Content cannot be empty!" });
		return;
	}
	
	//create user feedback object
	const userFeedback = new UserFeedback({
		rating: req.body.rating,
		email: req.body.email,
		eventName: req.body.eventName,
		comments: req.body.comments
	});
	
	//save user feedback collection in the DB
	userFeedback
		.save(userFeedback)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "error adding an user feedback"
			});
		});
};

//Retrieve all user feedback from Mongo DB
exports.findAll = (req, res) => {

	console.log("Inside find all");
	
	UserFeedback.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "error while retrieve all user feedback"
			});
		});
};

//Find existing user feedback by email
exports.findByEmail = (req, res) => {
	
	const email = req.query.email;
	console.log("inside find by email: " + email);
	
	UserFeedback.find({ email: email })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error occurred retrieve user feedback by email"
			});
		});
};

//Find existing user feedback by event name
exports.findByEventName = (req, res) => {
	
	const eventName = req.query.eventName;
	console.log("inside find by event name: " + eventName);
	
	UserFeedback.find({ eventName: eventName })
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error occurred retrieve user feedback by event name"
			});
		});
};


//Update user feedback by id
exports.update = (req, res) => {

	if(!req.body) {
		return res.status(400).send({ message: "data for update cannot be empty!" });
	}
	
	const feedbackId = req.params.id;
	
	UserFeedback.findByIdAndUpdate(feedbackId, req.body, { useFindAndModify: false })
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot update user feedback with id=$feedbackId. Record not found..!!`
				});
			} else {
				res.send({ message: "user feedback updated successfully..!!!"});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error with update user feedback with id = " + feedbackId
			});
		});
};

//Delete user feedback by id
exports.delete = (req, res) => {

	const feedbackId = req.params.id;
	
	UserFeedback.findByIdAndRemove(feedbackId)
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot delete user feedback with id=$feedbackId. Record not found..!!`
				});
			} else {
				res.send({ message: "User feedback deleted successfully...!!!" });
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Error with delete user feedback with id = " + feedbackId
			});
		});
};

//Delete all user profiles
exports.deleteAll = (req, res) => {

	UserFeedback.deleteMany({})
		.then(data => {
			res.send({ message: `${data.deletedCount} all user feedback deleted successfully!` });
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "Error with delete all user feedback"
			});
		});
};