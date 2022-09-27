const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 5,
			max: 24,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 8,
		},
		profilePicture: {
			type: String,
			default: "",
		},
		coverPicture: {
			type: String,
			default: "",
		},
		followers: {
			type: Array,
			default: [],
		},
		following: {
			type: Array,
			default: [],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamsp: true,
	}
);

module.exports = mongoose.model("User",userSchema)