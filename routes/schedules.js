var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var PythonShell = require('python-shell');
var Schedule = require("../models/schedule.js");
var Registration = require("../models/registration.js");
var authentication = require('../javascripts/authentication.js');
var utils = require('../javascripts/utils.js');
var csrf = require('csurf');
var ObjectId = mongoose.Schema.Types.ObjectId;

//TODO GET req for user

//PUT update schedule for a user --> must send notifications to user/tutor/admin|coordinator 


//only display schedules that are current. delete schedules for classes that are over. 

//get schedules for the user
// router.get('/:username', authentication.isAuthenticated, function (req, res, next) {
// 	var user = req.session.passport.user;
// 	Schedule.getSchedules(user, function (err, schedules) {
// 		if (err) {
// 			res.send({success: false, message: err.message});
// 		} else {
// 			res.send({success: true, schedules: schedules});
// 		}
// 	});	
// });

// DELETE where should this happen?

// PUT maybe we want ppl to be able to update and then send verifications to Admin/tutor/student


// gets all the registration objects and feed those to the python script 
// to get the pairs
router.put('/match', [authentication.isAuthenticated, authentication.isAdministrator], function (req, res, next) {
	Schedule.getMatches(function (err, matches) {
		if (err) {
			res.send({success: false, message: err.message});
		} else {
			res.send({success: true, message: 'Successfully generated matches!'})
		}
	});
});

router.put('/toggleSwitch', [authentication.isAuthenticated, authentication.isAdministrator], function (req, res, next) {
	global.schedulerJob.running = !global.schedulerJob.running;
	res.send({success: true, message: global.schedulerJob.running ? 'Turned the scheduler on': 'Turned the scheduler off'});
});

module.exports = router; //keep at the bottom of the file