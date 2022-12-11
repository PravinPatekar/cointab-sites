const mongoose = require("mongoose");
const DB = "mongodb+srv://Project_6:4v8EFCyqV6HOVh9H@cluster0.u6u38bx.mongodb.net/Project_6?retryWrites=true&w=majority"

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
