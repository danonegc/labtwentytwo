var express = require('express');
var router = express.Router();
var lyrics = require('./content');





router.get('/', function (req, res){
  res.json(lyrics[Math.floor(Math.random() * lyrics.length)]);
});

module.exports = router;
