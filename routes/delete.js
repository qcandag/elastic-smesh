var express = require('express');
const client = require('./connection.js');
var router = express.Router();

router.delete('/', function(req, res, next) {
  client.indices.delete({
    index: req.body.indexName,
  }, (err,resp,stat) => {
    console.log(resp)
  });

  res.end()

});

module.exports = router;
