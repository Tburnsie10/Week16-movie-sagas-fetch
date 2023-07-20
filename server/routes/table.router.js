const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  pool.query('SELECT * FROM "movies_genres";')
  .then((data) => {
    console.log("Table get recieved...")
    res.status(201).send(data.rows)
  })
  
});

module.exports = router;