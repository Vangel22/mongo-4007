const { get, create, update, remove } = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await get();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

// Task
const getSortedByName = async (req, res) => {};
const getOneUser = async (req, res) => {};
const getUserByEmail = async (req, res) => {};

const createUser = async (req, res) => {
  try {
    await create(req.body);
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const removeUser = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
};
