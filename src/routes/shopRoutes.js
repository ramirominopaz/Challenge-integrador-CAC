const express = require('express');
const shopControllers = require('../controllers/shopControllers.js');
const router = express.Router();


router.get('/', shopControllers.shop)

router.get('/item/:id', shopControllers.item)
router.post('/item/:id/add', shopControllers.itemPost)

router.get('/cart', shopControllers.cart)
router.post('/cart', shopControllers.cartPost)

module.exports = router;
