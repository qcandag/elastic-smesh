var express = require('express');
const client = require('./connection.js');

var router = express.Router();

router.put('/', function(req, res, next) {
  client.index({
    index: 'cloudindex',
    type: 'movie',
    id: req.body.id,
    body: {
      movie_name:req.body.movie_name,
      description:req.body.description
    }
  }, (err,resp,stat) => {
    console.log(resp)
  });

  res.end()
});

module.exports = router;
