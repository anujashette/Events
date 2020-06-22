const mongoose = require('mongoose');

/****************************************************************************************************
 * @description Artist schema.
 ****************************************************************************************************
 */
const artist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture:{
        type: String,
        // required: true,
        unique: true
    }
},
{
    timestamps:true
});

const Artist = new mongoose.model('artist', artist);
