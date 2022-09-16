let health = require("./implement/health.js");
let createUserInfo=require("./implement/create_user_info")
let createTour=require("./implement/create_tour")
let getTours=require("./implement/get_tours")


let routerHandler = {
  health,
  createUserInfo,
  createTour,
  getTours
}

module.exports = routerHandler;
