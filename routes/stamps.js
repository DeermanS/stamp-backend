var express = require('express');
var router = express.Router();
var dbConnection = require('../database');

/* GET stamps listing. */
router.get('/', function(req, res, next) {
  res.send('stamps');
});

//get all stamps
router.get('/allStamps', function(req, res, next) {
  getAllStampsBrief(req,res);
});

//get certain stamp
router.get('/:StampId', function(req, res, next) {
    getStampDetail(req,res);
  });

function getAllStamps (req, res) {
    dbConnection.db.any(
      `SELECT * FROM stamps`
      ).then((dataFromDB)=>{res.send(dataFromDB);})
  }

  function getAllStampsBrief (req, res) {
    dbConnection.db.any(
      `SELECT id, PCName, Image, PCTag FROM stamps`
      ).then((dataFromDB)=>{res.send(dataFromDB);})
  }

module.exports = router;