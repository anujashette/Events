const mongoose = require('mongoose');
const EventType = require('../../utility/staticContent');

/****************************************************************************************************
 * @description Event schema.
 ****************************************************************************************************
 */
const eventDetails = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    eventType: {
        type: String,
        enum : EventType,
        required: true,
    },
    language: {
        type: String,
        required: true
    },
    allowedAge: {
        type: Number,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        // required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    cover:{
        type:String,
        // required: true
    },
    broadcastPlatform:{
        type:String,
        required: true
    },
    interest:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
});

const Event = new mongoose.model('eventDetails', eventDetails);

function EventModel() { }

/****************************************************************************************************
 * @param eventParam
 * @description Add new event in database.
 ****************************************************************************************************
 */
EventModel.prototype.create = async (eventParam) => {

    let savedEvent = await Event.findOne({ 'name': eventParam.title });

    if (savedEvent !== null) {
        savedEvent = 'Event already exist';
    }
    else {
        const newEvent = new Event(eventParam);
        savedEvent = newEvent.save();
    }
    return savedEvent;
};
/****************************************************************************************************
 * @description Get all events from database.
 ****************************************************************************************************
 */
EventModel.prototype.read = async () => {

    let events = await Event.find({});
    let length = await Event.countDocuments();
    let getEvent = {
        events: events,
        eventLength: length
    }
    return getEvent;
};

/****************************************************************************************************
 * @param eventParam 
 * @description Edit event details and update in database.
 ****************************************************************************************************
 */
EventModel.prototype.update = async(id,eventParam) => {
    const updatedEvent = await Event.findByIdAndUpdate(id,eventParam);
    if(updatedEvent === null){
        return 'Event not found to update';
    }
    else{
        return updatedEvent;
    }
};

/****************************************************************************************************
 * @param eventParam 
 * @description Delete event from database.
 ****************************************************************************************************
 */
EventModel.prototype.delete = async(id) => {
    
    const deletedEvent = await Event.findByIdAndRemove(id);
    if(deletedEvent === null){
        return 'Event not found to delete';
    }
    else{
        return deletedEvent;
    }
};

module.exports = new EventModel();