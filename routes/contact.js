let express = require('express');
let router = express.Router();
let mongoose=require('mongoose');
//create a refernce to db schema
let contact=require('../models/conatct');
// get contact list page=read operation
router.get('/',(requesr,res,next)=>{
    contact.find((err,contactList)=>{
if(err){
return console.error(err);
}
else{
    console.log(contactList);
}
/*res.rener('contact/index'),{
    title:'Contact List',
    contactList=contactList;
}):*/
    });
});
router
module.exports = router;