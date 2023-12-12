const express = require('express');
const adminControllers = require('../controllers/adminControllers.js');
const router = express.Router();
const { isLogged } = require('../middlewares/login.js');

router.use(isLogged);

router.get('/', adminControllers.admin)

router.get('/create', adminControllers.create)
router.post('/create', adminControllers.createPost)

router.get('/edit/:id', adminControllers.edit)
router.put('/edit/:id', adminControllers.editPut)

router.delete('/delete/:id', adminControllers.delete)

module.exports = router