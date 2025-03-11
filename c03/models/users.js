const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    street: String, // Ulica 1
    city: String, // Skopje
  },
  {
    _id: false,
  }
);

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 3,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
      validate: {
        validator: (v) => v % 2 === 0,
        message: (props) => `${props.value} is not an even number`,
      },
    },
    email: {
      type: String,
      minLength: 10,
      lowercase: true,
      required: true,
    }, // trpe@mail.com
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(), // se povikuva koga ke napravime kreiranje na nov user
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    bestFriend: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    hobbies: [String],
    address: addressSchema,
  }
  //   {
  //     timestamps: true, // ke gi kreira createdAt i updatedAt za vas
  //   }
);

const User = mongoose.model("User", userSchema, "users");

// Create
const create = async (data) => {
  const user = new User(data);
  return await user.save();
};

// Read

const get = async () => {
  return await User.find(); // db.users.find()
};

// Task
// get user by id
// get user by email
// get all users sorted by name

// Update
const update = async (id, data) => {
  return await User.updateOne({ _id: id }, data);
};

// Delete
const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};

const getOne = async () => {};
const getAllSortedByName = async () => {};
const getByEmail = async () => {};

module.exports = {
  create,
  get,
  update,
  remove,
  getOne,
  getAllSortedByName,
  getByEmail,
};
