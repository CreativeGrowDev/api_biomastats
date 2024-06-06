const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const CreativeController = require('./controllers/CreativeController');


router.get('/logs', CreativeController.logsAll);

router.get('/pushlinks', CreativeController.pushlinksAll);

router.get('/logs/:referer', CreativeController.buscarReferer);

router.post('/link', CreativeController.buscarLink);

router.post('/logs', CreativeController.create);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


module.exports = router;