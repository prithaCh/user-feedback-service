//Define User Feedback model
module.exports = mongoose => {

	var template = mongoose.Schema( {
			rating: {type: Number, min:0, max: 5},
			comments: String,
			email: String,
			eventName: String
		},
		{ timeStamps: true }
	);
	
	template.method("toJSON", function() {
		const { _v, _id, ...object } = this.toObject();
		object.id = _id;
		object.version = _v;
		return object;
	});

	const UserFeedback = mongoose.model("userFeedback", template);
	return UserFeedback;
}