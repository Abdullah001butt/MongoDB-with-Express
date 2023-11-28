const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Abdullah",
    to: "Azaan",
    msg: "Hi Azaan",
    created_at: new Date(),
  },
  {
    from: "Abdullah",
    to: "Akmal",
    msg: "Hi Akmal",
    created_at: new Date(),
  },
  {
    from: "Akmal",
    to: "Tayyaba",
    msg: "Hi Tayyaba",
    created_at: new Date(),
  },
  {
    from: "Tayyaba",
    to: "Anas",
    msg: "Hi Anas",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
