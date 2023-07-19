const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

const foodItem = require("./allAPI");

//home
app.get("/", (req, res) => {
  res.render("home", { foodItem: foodItem });
});

//home
app.get("/home", (req, res) => {
  res.render("home", { foodItem: foodItem });
});

//menu
app.get("/menu", (req, res) => {
  res.render("menu", { foodItem: foodItem });
});

//gallery
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//about
app.get("/about", (req, res) => {
  res.render("about");
});

//contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Listening to the Port ${PORT}`);
});
