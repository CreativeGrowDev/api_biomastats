require('dotenv').config({path:'conf.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const routes = require('./routes');

const server = express();

server.use(cors());

server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes);

server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
