let express = require("express");
let app = new express();

var cors = require('cors')
app.use(cors())
//connect to db
require('dotenv').config({ path: 'app.env' })


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
const apiRouter = require('./router/index.js');

app.use('/api/', apiRouter);


app.listen(8080 || process.env.PORT, () => {
  console.log("running");
  // let createScript=require("./utils/mysql")
  // createScript.script()
})
