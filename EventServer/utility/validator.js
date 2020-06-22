const log = require('../LoggerWinston/winston');
const EventType = require('../utility/staticContent');

exports.eventValidator = ( function (req,res,next) {
    try {
        // .isString().withMessage('Should be string')
        if(req.body.id !== undefined){
            console.log('idd',req.body.id);
            
            req.check('id').not().isEmpty().withMessage('Unique title is required')
            .isMongoId().withMessage(`valid ObjectID`);
        }
        if(req.body.eventTitle !== undefined){
            req.check('eventTitle').not().isEmpty().withMessage('Unique title is required');
        }
        if(req.body.eventType !== undefined){
            req.check('eventType').not().isEmpty().withMessage('Event type is required').
        isIn(EventType).withMessage(req.body.eventType+' Type not available in list');
        }
        if(req.body.eventLanguage !== undefined){
            req.check('eventLanguage').not().isEmpty().withMessage('Event broadcasting language is required');
        }
        if(req.body.audianceAllowedAge !== undefined){
            req.check('audianceAllowedAge').not().isEmpty().withMessage('Audiance Min Age Limit is required').isNumeric().withMessage('Should be number');
        }
        if(req.body.eventDuration !== undefined){
            req.check('eventDuration').not().isEmpty().withMessage('Event broadcasting time duration is required');
        }
        if(req.body.eventStartDate !== undefined){
            req.check('eventStartDate').not().isEmpty().withMessage('Event start date is required');
        }
            // req.check('eventEndDate').not().isEmpty().isString().withMessage('Event end date is required');
        if(req.body.description !== undefined){
            req.check('description').not().isEmpty().withMessage('About event details required');
        }if(req.body.eventPrice !== undefined){
            req.check('eventPrice').not().isEmpty().isNumeric().withMessage('Event price is required').isNumeric().withMessage('Should be number');
        }if(req.body.eventPicture !== undefined){
            req.check('eventPicture').not().isEmpty().withMessage('Event picture is required');
        }if(req.body.broadcastPlatform !== undefined){
            req.check('broadcastPlatform').not().isEmpty().withMessage('Event broadcast platform is required');
        }

        let error = req.validationErrors();
        if (error) {
            log.logger.error('validation error-', error) 
            res.status(402).send(error);
        }
        else {         
            console.log('----2', req.body);
   
            return next();
        }
    }
    catch (err) {        
        let response = {};
        response.message = 'Somthing went wrong...';
        log.logger.error('exception-', err) 
        return res.status(422).send(response);
    }
})