const express = require("express")
// Router
const router = express.Router();
const request = require('request')
const JSON = require('circular-json');

let results;
let url = "http://www.beedeez.com/api/v1/public/lessons/200/1"

router.get("/all", (req, res) => {
    request(url, (error, response, body) => { 
  if (!error && response.statusCode === 200) {
    results = body
    
  }
  res.send(results);
}) 

// res.send(req)
// res.send(res)

})


module.exports = router;