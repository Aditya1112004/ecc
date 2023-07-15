const express = require("express");
const ejs = require("ejs");
const multer = require("multer");

const app = express();
const path = require("path");

// DB connection
require("./src/db/conn");
const register = require("./src/models/registers");
const messages = require("./src/models/messages");

const port = process.env.PORT || 3001;

//Public Static Path

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));

const partials_path = path.join(__dirname, "../views/partials");
const directory_path = path.join(__dirname, "../views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// //Routing
app.get("/", (req, res) => {
  res.render("index");
});

//index
app.get("/index", (req, res) => {
  res.render("index");
});

//allevents
app.get("/allevents", (req, res) => {
  res.render("allevents");
});

//gallery
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

//allmembers
app.get("/allmembers", (req, res) => {
  res.render("allmembers");
});

//about
app.get("/about", (req, res) => {
  res.render("about");
});

//error404
app.get("*", (req, res) => {
  res.render("error404");
});

//Listening to the port
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
