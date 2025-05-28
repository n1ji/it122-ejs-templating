//include Express
const express = require('express');
//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
  res.locals.navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Headphones', url: '/headphones' },
    { name: 'Other Sites', url: '/sites' }
  ];
  next();
});

//index/home URL
app.get('/',(req,res)=>{
  let title = 'Home';
  res.render('pages/index', {title});
});

//about page/url
app.get('/about',(req,res)=>{
  let about = {
    title: 'About'
  }
  res.render('pages/about', {title: about.title});
});

//headphones page/url
app.get('/headphones',(req,res)=>{
  let about = {
    title: 'Headphones'
  }
  res.render('pages/headphones', {title: about.title});
});

//sites page/url
app.get('/sites',(req,res)=>{
  let about = {
    title: 'Other Sites'
  }
  res.render('pages/sites', {title: about.title});
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

