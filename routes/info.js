var express = require('express');
const client = require('./connection.js');

var router = express.Router();

router.get('/', function(req, res, next) {

  client.count({index: 'cloudindex',type: 'movie'},function(err,resp,status) {  
    res.json(resp);
  });

  //res.end()
});

module.exports = router;
