//initialize libraries
const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
	origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

//Database connection to Mongo DB
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected to the database..!!");
	})
	.catch(err => {
		console.log("Cannot connect to the database...", err);
		process.exit();
	})

//parse requests of content-type application/json
app.use(express.json());

//parse requests of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
	res.json({ message: "User Feedback services" });
});

require("./app/routes/user-feedback.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}...`);
});
