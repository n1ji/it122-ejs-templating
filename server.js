// Include Express
const express = require("express");
const port = 3000;

// Create instance of Express app
const app = express();

// Load data
const data = require("./test.json");

// Load environment variables and database
require('dotenv').config();
require('./models/mongoose');

// Set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static("public"));

//allows us to delete records
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set navigation links for all pages
app.use((req, res, next) => {
  res.locals.navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Headphones", url: "/headphones" },
    { name: "Other Sites", url: "/sites" },
    { name: "Users", url: "/users" },
    { name: "Recipes", url: "/recipes"}
  ];
  next();
});

const session = require('express-session');
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));

//pass session data to routes
app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Recipe routes
const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home" });
});

// About page
app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About" });
});

// Headphones page
app.get("/headphones", (req, res) => {
  res.render("pages/headphones", { title: "Headphones" });
});

// Other Sites page
app.get("/sites", (req, res) => {
  res.render("pages/sites", { title: "Other Sites" });
});

// Users list page
app.get("/users", (req, res) => {
  res.render("users/index", {
    title: "Users",
    users: data,
  });
});

// User view page
app.get("/users/view/:id", (req, res) => {
  const user = data.find(u => u.id == req.params.id);
  res.render("users/view", {
    title: "User Page",
    user,
    bio_data: user.bio_data,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});