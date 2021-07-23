var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send({
    resources: 'https://coding-toolbox-server.herokuapp.com/resources',
    templates: 'https://coding-toolbox-server.herokuapp.com/resources',
    readinglist: 'https://coding-toolbox-server.herokuapp.com/readinglist',
    test: 'https://coding-toolbox-server.herokuapp.com/test',
    dev: 'https://coding-toolbox-server.herokuapp.com/dev',
    gym: 'https://coding-toolbox-server.herokuapp.com/gym',
    icons: 'https://coding-toolbox-server.herokuapp.com/icons',
    CLIENT: 'https://coding-toolbox.herokuapp.com'
  });
})

module.exports = router;