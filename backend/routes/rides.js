const express = require('express');

const bodyParser = require('body-parser');

const router = express.Router({ mergeParams: true });
const multer = require('../middleware/multer-config');
const fs = require('fs');

const ridesControl = require('../controllers/rides');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', ridesControl.createRide);
router.get('/', ridesControl.getAllRides);

module.exports = router;
