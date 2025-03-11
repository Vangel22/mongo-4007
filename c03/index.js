const express = require("express");
// require("./db/config"); // se povikuva fajlot config i se izvrsuva connect();
const connectToDb = require("./db/config");
connectToDb(); // se povrzavme

const {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
} = require("./controllers/users");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", getAllUsers);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", removeUser);

app.listen(3000, () => console.log("Server started at port 3000!"));
