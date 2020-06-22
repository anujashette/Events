const eventModel = require('../model/event.model');
function Service() { }
const log = require('../../LoggerWinston/winston');

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Add new event.
 ****************************************************************************************************
 */
Service.prototype.createEvent = async (eventParam, callback) => {
    try {
        const createResponse = await eventModel.create(eventParam);
        if (createResponse === 'Event already exist') {
            return callback(createResponse);
        }
        else {
            return callback(null, createResponse);
        }
    } catch (error) {
        log.logger.error('create Service',error);
        return callback('Somthing went wrong...');
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Fetch all events.
 ****************************************************************************************************
 */
Service.prototype.readEvent = async (callback) => {
    try {
        const readResponse = await eventModel.read();
        return callback(null, readResponse);
    } catch (error) {
        log.logger.error('read Service',error);
        return callback('Somthing went wrong...');
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Update event details.
 ****************************************************************************************************
 */
Service.prototype.updateEvent = async (id, updateParam, callback) => {
    try {
        const updateResponse = await eventModel.update(id, updateParam);
        if (updateResponse === 'Event not found to update') {
            return callback(updateResponse);
        }
        else {
            return callback(null, updateResponse);
        }
    } catch (error) {
        log.logger.error('update Service',error);
        return callback('Somthing went wrong...');
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Delete event.
 ****************************************************************************************************
 */
Service.prototype.deleteEvent = async (eventParam, callback) => {
    try {
        const id = { _id: eventParam.id };
        const deleteResponse = await eventModel.delete(id);
        if (deleteResponse === 'Event not found to delete') {
            return callback(deleteResponse);
        }
        else {
            return callback(null, deleteResponse);
        }
    } catch (error) {
        log.logger.error('delete Service',error);
        return callback('Somthing went wrong...');
    }
};

module.exports = new Service();