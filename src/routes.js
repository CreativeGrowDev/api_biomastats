const express = require('express');
const router = express.Router();

const CreativeController = require('./controllers/CreativeController');


router.get('/logs', CreativeController.logsAll);

// router.get('/clientes/:id', CreativeController.buscarPorId);


module.exports = router;