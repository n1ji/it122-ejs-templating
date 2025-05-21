//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

app.set('view engine', 'ejs');

//index/home URL
app.get('/',(req,res)=>{
  let title = 'Home';
  res.render('pages/index', {title});
});

//about page/url
app.get('/about',(req,res)=>{
  res.render('pages/about')
});


//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

