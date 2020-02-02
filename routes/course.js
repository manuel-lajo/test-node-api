const express = require('express');

const courseController = require('../controllers/courses');

const router = express.Router();

router.get('/', courseController.getCourses);

module.exports = router;
