const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new Schema({
	initials: {
		type: String,
		required: true,
		trim: true,
	},
	parent_email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	daily_reports: [],
	// posts: [
	//     {
	//         type: Schema.Types.ObjectId,
	//         ref: "Post",
	//     },
	// ],
});

// set up pre-save middleware to create password
studentSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
studentSchema.methods.isCorrectPassword = async function (password) {
	// console.log(password)
	// console.log(password.password)
	// console.log(this.password)
	return bcrypt.compare(password.password, this.password);
};

const Student = model("Stude t", studentSchema);

module.exports = Student;
