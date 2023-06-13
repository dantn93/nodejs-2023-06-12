const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/book');

router.get('/get-all-books', bookControllers.getAllBooks);
router.get('/all-names', bookControllers.getAllBookNames);

module.exports = router;