let express = require('express');
let router = express.Router();

let contactController=require("../controllers/contact");
/* GET Contact List page - READ Operation */
router.get('/', contactController.displayContactList);

/* get route for add page to display add page*/
router.get('/add',contactController.displayAddPage);
/* post route to process ADD page*/
router.post('/add',contactController.ProcessAddPage);
/* get request-display EDIT page*/
router.get('/edit/:id',contactController.displayEditPage);
router.post('/edit/:id',contactController.ProcessEditPage);

/* get request to perform delte action*/
router.get('/delete/:id',contactController.performDelete);

module.exports = router;