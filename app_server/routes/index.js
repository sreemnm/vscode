var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


/* Location pages */
router.get('/', ctrlLocations.homelist );
router.get('/location', ctrlLocations.locationInfo );
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
