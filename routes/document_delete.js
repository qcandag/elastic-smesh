var express = require('express');
const client = require('./connection.js');

var router = express.Router();

router.delete('/', function(req, res, next) {
  client.delete({
    index: 'cloudindex',
    type: 'movie',
    id: req.body.id
  }, (err,resp,stat) => {
    console.log(resp)
  });
  res.end()
});

module.exports = router;
