var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/', function (req, res) {
  knex
    .select('*')
    .from('files')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The droids you are looking for could not be found. Please try again'
      })
    );
})

router.post('/', (req, res) => {
  console.log("New input: ", req.body)
    knex('files')
    .insert(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `error`
      })
    })
})

module.exports = router;
