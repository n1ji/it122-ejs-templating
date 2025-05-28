//include Express
const express = require("express");
//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

var data = require("./test.json");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Headphones", url: "/headphones" },
    { name: "Other Sites", url: "/sites" },
    { name: "Users", url: "/users" },
  ];
  next();
});

//index/home URL
app.get("/", (req, res) => {
  let title = "Home";
  res.render("pages/index", { title });
});

//about page/url
app.get("/about", (req, res) => {
  let about = {
    title: "About",
  };
  res.render("pages/about", { title: about.title });
});

//headphones page/url
app.get("/headphones", (req, res) => {
  let about = {
    title: "Headphones",
  };
  res.render("pages/headphones", { title: about.title });
});

//sites page/url
app.get("/sites", (req, res) => {
  let about = {
    title: "Other Sites",
  };
  res.render("pages/sites", { title: about.title });
});

//users page/url
app.get("/users", (req, res) => {
  let about = {
    title: "Users",
  };
  res.render("users/index", {
    title: about.title,
    users: data,
  });
});

//add user/view route - we are cheating by using the array index - 1
app.get("/users/view/:id", function (req, res) {
  var title = "User Page";
  const user = data.find(u => u.id == req.params.id);
  res.render('users/view', {
    title,
    user,
    bio_data: user.bio_data 
  });
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
