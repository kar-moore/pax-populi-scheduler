var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Schedule = require("../models/schedule.js");
var csrf = require('csurf');
var ObjectId = mongoose.Schema.Types.ObjectId;

//GET request for seeing schedule

// DELETE where should this happen?

// PUT maybe we want ppl to be able to update and then send verifications to Admin/tutor/student



module.exports = router; //keep at the bottom of the file
