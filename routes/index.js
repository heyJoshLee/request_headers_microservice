var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var output = {},
      user_agent = req.headers["user-agent"].split(" ");

  output.software = user_agent.slice(1, 7).join(" ").replace(/\(|\)/g, "");
  output.language = req.headers["accept-language"].split(",")[0];
  output.ipaddress = req.connection.remoteAddress;

  res.send(output);
});

module.exports = router;
