var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  const links = [
    {
      {'https://coding-toolbox-server.herokuapp.com/'},
      {'https://coding-toolbox-server.herokuapp.com/resources'},
      {'https://coding-toolbox-server.herokuapp.com/templates'},
      {'https://coding-toolbox-server.herokuapp.com/readinglist'},
      {'https://coding-toolbox-server.herokuapp.com/test'},
      {'https://coding-toolbox-server.herokuapp.com/dev'},
      {'https://coding-toolbox-server.herokuapp.com/gym'},
      {'https://coding-toolbox-server.herokuapp.com/icons'}
    }
  ]

  res.send('Welcome to the Galaxy', links);
})

module.exports = router;