var express = require('express');
const client = require('./connection.js');
var router = express.Router();

router.post('/', function(req, res, next) {
  client.indices.create({
    index: req.body.indexName,
  }, (err,resp,stat) => {
    console.log(resp)
  });

  res.end()

});

module.exports = router;
