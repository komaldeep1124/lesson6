let express = require('express');
let router = express.Router();
module.exports.displayHomePage=(req,res,next)=> {
    res.render('index', { title: 'Home' });
  }
  module.exports.displayAbout=(req,res,next)=> {
    res.render('index', { title: 'About' });
  }
  module.exports.displayPro=(req,res,next)=> {
    res.render('index', { title: 'Products' });
  }
module.exports.displayServcies=(req,res,next)=> {
    res.render('index', { title: 'Services' });
  }
  module.exports.displayContact=(req,res,next)=> {
    res.render('index', { title: 'Contact' });
  }
