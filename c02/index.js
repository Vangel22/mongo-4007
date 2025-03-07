const mongoose = require("mongoose");

const User = require("./user");

const URI =
  "mongodb+srv://<vasiot-user>:<vasiot-password>@cluster0.12jzasd.mongodb.net/grupa-4007?retryWrites=true&w=majority&appName=Cluster0";
// NE PRAVETE COMMIT SO VASIOT PASSWORD I KORISNICKO IME
//   Pomegju /? se pisuva imeto na vasata databaza
mongoose
  .connect(URI)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

async function run() {
  try {
    // CREATE
    // const user = new User({
    //   name: "Trpe",
    //   age: 20,
    //   hobbies: ["Books", "Programming"],
    //   email: "trpe@gmail.com",
    //   address: {
    //     street: "Address One",
    //     city: "Skopje",
    //   },
    // });
    // await user.save();
    // console.log("User created!");
    // READ
    // const foundUser = await User.findOne({
    //   name: "Trpe",
    //   email: "trpe@gmail.com",
    // });
    // console.log("Found user", foundUser);
    // UPDATE
    // const updateUser = await User.updateOne(
    //   {
    //     _id: "67cb5627fd2d68d2c3a1667d",
    //   },
    //   { $set: { name: "Trpe" } }
    // );
    // console.log("Updated user", updateUser);
    // DELETE
    // const deletedUser = await User.deleteOne({
    //   _id: "67cb5627fd2d68d2c3a1667d",
    // });
    // console.log("Deleted user", deletedUser);
  } catch (err) {
    console.log(err);
  }
}

run();
