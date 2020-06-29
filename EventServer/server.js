/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js 
 *  
 *  Purpose:  Entry point.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since  6-6-2020
 ************************************************************************/

/**
  * @module express,bodyParser,expressValidator,dotenv,cors
  * @description Modules are required throughout developemnt and it's functionality used.
  */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/router/routes');
var expressValidator = require('express-validator');
/**
 * @description Swagger documentation required.
 */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Swagger/swagger.json');
var app = express();
require('./DBConnection/db.connection.js');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(expressValidator());
app.use('/',routes);

/**
 * @function get
 * @description Router to check connection is successfull
 */
app.get('/',function(req,res){
	res.send('Event API running...');
});
/**
 * @function listen
 * @description Request Listen on PORT
 */
app.listen(process.env.PORT, function () { 
	console.log('app running on port http://localhost:'+process.env.PORT);
});

module.exports = app;