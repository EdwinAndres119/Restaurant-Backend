const express = require('express');
const restaurantcontroller = require('../Controllers/restaurantController');
const router = express.Router();

router.post('/createRestaurant', restaurantcontroller.createRestaurant);
router.get('/listrestaurant', restaurantcontroller.listRestaurant);
router.put('/updaterestaurant/:restaurantId', restaurantcontroller.updateRestaurant);
router.put('/disablerestaurant/:restaurantId', restaurantcontroller.disableRestaurant);
router.put('/enablerestaurant/:restaurantId', restaurantcontroller.enableRestaurant);

module.exports = router;
