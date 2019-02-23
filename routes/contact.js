let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contactModel = require('../models/contact');

/* GET Contact List page - READ Operation */
router.get('/', (req, res, next) =>{
    contactModel.find((err, contactList) => {
        if(err) {
            return console.error(err);
        }
        else {
           // console.log(contactList);

            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            
        }
    });
});
/* get route for add page to
display add page*/
router.get('/add',(req,res,next)=>
{
res.render('contacts/add',{
    title:'Add New contact'
});

});
/* post route to process ADD page*/
router.post('/add',(req,res,next)=>
{      
let newContact=contactModel({
"firstName":req.body.firstName,
"lastName":req.body.lastName,
"age":req.body.age
});
contactModel.create(newContact,(err,contactModel) =>{
if(err){
console.log(err);
res.end(err)
}
else{
    //refresh contact list
    res.redirect('/contact-list');
}
});
});
/* get request-display EDIT page*/
router.get('/edit/:id',(req,res,next)=>{
let id=req.params.id;

contactModel.findById(id,(err,contactObject)=>
{
    if(err){
        console.log(err);
        res.end(err)
        }
        else{
            //show the edit view contact list
            res.render('contacts/edit',
            {          
                title:'Edit Contact',
                contact:contactObject
            });
    
    
        }
});

});
router.post('/edit/:id',(req,res,next)=>
{
    let id=req.params.id;
    let updatedContact=contactModel({
        "_id":id,
        "firstName":req.body.firstName,
        "lastName":req.body.lasttName,
        "age":req.body.age
    });
    contactModel.update({_id:id}),updatedContact,(err)=>{
        if(err){
            console.log(err);
            res.end(err)
            }
            else{
                //show the edit view contact list
                res.redirect('/contact-list');
                 
            }

        }

});


module.exports = router;