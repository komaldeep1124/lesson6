let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let favThing = require('../models/favThing');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    favThing.find((err, favList) => {
        if(err) {
            return console.error(err);
        }
        else {
           console.log(favList);

            res.render('contacts/index', {
                title: 'Favourite List',
                favList: favList
            });
            
        }
    });
});

module.exports = router;