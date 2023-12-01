const express = require('express');
const authControllers = require('../controllers/authControllers.js');
const router = express.Router();

router.get('/login', authControllers.login)
router.post('/login', authControllers.loginPost)

router.get('/register', authControllers.register)
router.post('/register', authControllers.registerPost)

router.get('/logout', authControllers.logout)

module.exports = router;