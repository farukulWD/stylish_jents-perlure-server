const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.Payment_secret_key);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("parlour is start");
});

app.listen(port, () => {
  console.log(`parlour is ${port}`);
});
