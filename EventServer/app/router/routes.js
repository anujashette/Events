/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Routing defined using methods of the Express app.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   15-6-2020
 *
 ******************************************************************************/

const express = require('express');
const app = express.Router();
const eventObj = require('../controller/event.controller');
const validator = require('../../utility/validator');

/*****************************************************************************************************
 * @param /event Route path.
 * @param eventObj Controller function object. 
 * @description CRUD router of event.
 *****************************************************************************************************
 */

app.post('/event',validator.eventValidator,eventObj.createEvent);
app.get('/event',eventObj.readEvent);
app.put('/event',validator.eventValidator,eventObj.updateEvent);
app.patch('/event',validator.eventValidator,eventObj.deleteEvent);

module.exports = app;