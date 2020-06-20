const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// POST /feedback -- save new feedback to the database
router.post('/', (req, res) => {
  const {
    feeling,
    understanding,
    support,
    comments
  } = req.body // setting req.body to the object of info we want to save
  console.log(req.body);
  const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [feeling, understanding, support, comments])
      .then((result) => {
          console.log('Feedback added!');
          res.sendStatus(201); // OK created
      }).catch((error) => {
          console.log('Error adding feedback: ', error);
          res.sendStatus(500); //server error
      });
})
// end POST

module.exports = router;