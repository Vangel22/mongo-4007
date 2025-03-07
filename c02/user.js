const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
    min: 18,
    max: 60,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: String,
  createdAt: Date,
  updatedAt: Date,
  // Relacija
  // bestFriend:
  hobbies: [String],
  address: addressSchema,
  isStudent: Boolean,
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
