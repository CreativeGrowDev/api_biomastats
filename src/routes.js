const express = require('express');
const router = express.Router();

const CreativeController = require('./controllers/CreativeController');


router.get('/logs', CreativeController.logsAll);

router.get('/logs/:referer', CreativeController.buscarReferer);


module.exports = router;