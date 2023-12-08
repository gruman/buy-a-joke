const express = require('express');

const publicController = require('../controllers/public');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    await publicController.getLines(req, res);
     } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});
// GET /feed/posts
router.get('/lines', publicController.getLines);

module.exports = router;