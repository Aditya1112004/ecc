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

// data api
const oldteam = require('./oldteam');
const newteam = require('./newteam');
const allevents = require('./allevents');
const upcoming = require('./upcoming');
const gallery = require('./gallery');
const docs = require('./docs');

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
  res.render("index", { upcoming });
});

//index
app.get("/index", (req, res) => {
  res.render("index",{upcoming});
});

//allevents
app.get("/allevents", (req, res) => {
  res.render("allevents",{allevents:allevents});
});

//gallery
app.get("/gallery", (req, res) => {
  res.render("gallery",{gallery});
});

//allmembers
app.get("/allmembers", (req, res) => {
  res.render("allmembers",{oldteam,newteam});
});

//about
app.get("/about", (req, res) => {
  res.render("about");
});

//upcoming
app.get("/upcoming", (req, res) => {
  res.render("upcoming",{upcoming});
});

//documents
app.get("/documents", (req, res) => {
  res.render("documents",{docs});
});

//error404
app.get("*", (req, res) => {
  res.render("error404");
});

//Listening to the port
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
