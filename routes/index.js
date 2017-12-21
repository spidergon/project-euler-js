const express = require('express');
const router = express.Router();

// Do work here
router.get(['/', '/problems'], (req, res) => {
   res.render('main', {
     title: 'All problems'
   });
});

router.get('/problems/:id', (req, res) => {
  res.render('problem', {
    id: req.params.id,
    title: `Problem #${req.params.id}`
  });
});

module.exports = router;
