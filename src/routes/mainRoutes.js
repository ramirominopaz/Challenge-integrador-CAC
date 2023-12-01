const express = require('express');
const mainControllers = require('../controllers/mainControllers.js');
const router = express.Router();

router.get('/', mainControllers.home)
router.get('/contact', mainControllers.contact)
router.get('/about', mainControllers.about)
router.get('/faqs', mainControllers.faqs)

module.exports = router;