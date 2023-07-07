const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.router;
const userController = require("./src/controller/userController");
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const port = 7000;

const db_url = "mongodb+srv://manish:manish@cluster0.5qvhfff.mongodb.net/";

mongoose
  .connect(db_url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error occur", err);
  });

  app.use("/api", userController);

app.listen(port, () => {
  console.log(`server os on port  ${port}`);
});
