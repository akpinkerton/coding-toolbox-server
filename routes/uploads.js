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

router.post("/", async (req, res) => {
  const {file_name, file} = req.files.pic;
  if (file_name && file){
    await knex('files')
    .insert({file_name: file_name, file: file });
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
})

router.get("/file/:id", async (req, res) => {
  const id = req.params.id;
  const file = await knex('files').where({id: id}).first();
  if (file) {
    res.end(files.file);
  } else {
    res.end('no file')
  }
})

module.exports = router;
