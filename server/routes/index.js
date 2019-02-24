let express = require('express');
let router = express.Router();
 let indexController=require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAbout);

/* GET products page. */
router.get('/products', indexController.displayPro);

/* GET services page. */
router.get('/services', indexController.displayServcies);

/* GET contact page. */
router.get('/contact',indexController.displayContact );


module.exports = router;