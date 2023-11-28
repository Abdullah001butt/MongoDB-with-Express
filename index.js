// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

// Initializing the express app
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB database
main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

// Defining the main function to connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

// New Route

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("Chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

let Chat1 = new Chat({
  from: "neha",
  to: "priya",
  msg: "send me your exam sheet",
  created_at: new Date(),
});

Chat1.save().then((res) => {
  console.log(res);
});

// Defining the root route
app.get("/", (req, res) => {
  res.send("root is working");
});

// Starting the server on port 8080
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
//
//In this code, we are using the Express.js framework to create a web server. We are also using the Mongoose library to interact with a MongoDB database.
//
//The `main` function is defined to connect to the MongoDB database using the Mongoose `connect` method. This function is then called to establish the connection.
//
//The root route ("/") is defined using the `app.get` method. When a GET request is made to this route, the server responds with the message "root is working".
//
//Finally, the server is started using the `app.listen` method. It listens on port 8080 and logs a message to the console when it starts successfully..</s>
