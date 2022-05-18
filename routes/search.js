var express = require('express');
const client = require('./connection.js');

var router = express.Router();

router.get('/', function(req, res, next) {
    client.search({  
      index: 'cloudindex',
      type: 'movie',
      body: {
        query: {
          match: {
              description: {
                  query: req.body.query_input,
                  fuzziness: 'AUTO',
                  operator: "or",
                  minimum_should_match: 1
              }
          }
        },
      }
      }, (err, response, status) => {
      if (err){
          console.log(err);
      }else {
        const resArray = []
          res.send( "-- [0] --" + response.body.hits.hits[0]._source.description + " \n \n -- [1] -- " + response.body.hits.hits[1]._source.description);
      }
    });
});

module.exports = router;
