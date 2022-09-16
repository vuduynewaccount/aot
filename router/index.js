const express = require('express');
const router = express.Router();
let routerHandler = require("./routerHandler");
// define the home page route

router.get('/health', routerHandler.health);
router.post('/user-info',routerHandler.createUserInfo);
router.post('/create-tour',routerHandler.createTour);
router.get('/list-tour',routerHandler.getTours);


module.exports = router
