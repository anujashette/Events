const eventService = require('../service/event.service');
const log = require('../../LoggerWinston/winston');
const pageList = require('../middleware/pagination')

function EventController() { }

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Add new event.
 ****************************************************************************************************
 */
EventController.prototype.createEvent = (req, res) => {
    try {                        
        const eventParam = {
            title: req.body.eventTitle,
            eventType: req.body.eventType,
            language: req.body.eventLanguage,
            allowedAge: req.body.audianceAllowedAge,
            duration: req.body.eventDuration,
            startDate: req.body.eventStartDate,
            endDate: req.body.eventEndDate,
            description: req.body.description,
            price: req.body.eventPrice,
            cover: req.body.eventPicture,
            broadcastPlatform: req.body.broadcastPlatform
        };

        eventService.createEvent(eventParam, (error, response) => {          
            if (error) {                
                return res.status(409).send({
                    status: '409',
                    message: error,
                    data: ''
                });
            }
            else {                
                return res.status(200).send({
                    status: '200',
                    message: 'Event added successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
        return callback('Somthing went wrong...');
    }
};

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Fetch all events.
 ****************************************************************************************************
 */
EventController.prototype.readEvent = (req, res) => {
    try {
        eventService.readEvent((error, response) => {
            if (error) {
                return res.status(403).send({
                    status: '403',
                    message: 'Something went wrong...',
                    data: response
                });
            }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Events retrived successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
        return callback('Somthing went wrong...');
    }
};

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Edit event details.
 ****************************************************************************************************
 */
EventController.prototype.updateEvent = (req, res) => {
    try {
        const eventParam = {};
        const id = {};

        if(req.body.id !== undefined){
             id._id = req.body.id;
        }
        if(req.body.eventTitle !== undefined){
            eventParam.title = req.body.eventTitle;
        }        
        if(req.body.eventType !== undefined){
            eventParam.eventType = req.body.eventType;
        }    
        if(req.body.eventLanguage !== undefined){
            eventParam.language = req.body.eventLanguage;
        }        
        if(req.body.audianceAllowedAge !== undefined){
            eventParam.allowedAge = req.body.audianceAllowedAge;
        }
        if(req.body.eventDuration !== undefined){
            eventParam.duration = req.body.eventDuration;
        }        
        if(req.body.eventStartDate !== undefined){
            eventParam.startDate = req.body.eventStartDate;
        }        
        if(req.body.eventEndDate !== undefined){    
            eventParam.endDate = req.body.eventEndDate;
        }        
        if(req.body.description !== undefined){
            eventParam.description = req.body.description;
        }        
        if(req.body.eventPrice !== undefined){    
            eventParam.price = req.body.eventPrice;
        }        
        if(req.body.eventPicture !== undefined){    
            eventParam.cover = req.body.eventPicture;
        }        
        if(req.body.broadcastPlatform !== undefined){    
            eventParam.broadcastPlatform = req.body.broadcastPlatform
        }

        eventService.updateEvent(id,eventParam, (error, response) => {
            if (error) {
                return res.status(403).send({
                    status: '403',
                    message: error,
                    data: ''
                });                }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Event updated successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
        return callback('Somthing went wrong...');
    }
};


/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Delete event.
 ****************************************************************************************************
 */
EventController.prototype.deleteEvent = (req, res) => {
    try {        
        const eventParam = {
            id: req.body.id,
        };
        eventService.deleteEvent(eventParam,(error, response) => {
            if (error) {
                return res.status(403).send({
                    status: '403',
                    message: error,
                    data: ''
                });
            }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Event deleted successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
        return callback('Somthing went wrong...');
    }
};
module.exports = new EventController();