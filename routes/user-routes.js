const router = require('express').Router();
const userCtrl = require('../controllers/user-controller');

router.post('/list', userCtrl.getUsers)

module.exports = router