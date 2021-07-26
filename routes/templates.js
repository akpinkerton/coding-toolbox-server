var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/', function (req, res) {
  knex
    .select('*')
    .from('templates')
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
    knex('templates')
    .insert(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `error`
      })
    })
})

router.post("/", async (req, res) => {
  const {name, data} = req.files.pic;
  await knex('templates')
  .insert({file_name: file_name, file: file });
  res.sendStatus(200);
})


router.delete('/', (req, res) => {
  const id = req.body.id
  console.log(id)
  knex('templates')
    .where('id', id)
    .del()
    .then(res.end())
})

module.exports = router;
