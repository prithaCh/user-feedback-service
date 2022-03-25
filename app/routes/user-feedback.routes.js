//Updated routes for user feedback service

module.exports = app =>  {
	
	//initialize router
	var router = require("express").Router();
	
	const userFeedback = require("../controllers/user.feedback.controller.js");

	//------------------------------------------------
	//create user feedback
	router.post("/feedback", userFeedback.create);
	
	//retrieve all user feedback
	router.get("/feedback", userFeedback.findAll);
	
	//retrieve single user feedback with event name
	router.get("/feedbackbyevent", userFeedback.findByEventName);
	
	//retrieve user feedback with email
	router.get("/feedbackbyemail", userFeedback.findByEmail);
	
	//update user feedback by id
	router.put("/feedback/:id", userFeedback.update);
	
	//delete user feedback by id
	router.delete("/feedback/:id", userFeedback.delete);
	
	//delete all user feedback
	router.delete("/feedback", userFeedback.deleteAll);
	
	//------------------------------------------------
	//register endpoint
	app.use('/api', router);
};