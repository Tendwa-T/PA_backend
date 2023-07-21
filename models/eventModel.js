const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        start: {type: String, required: true},
        end: {type: String, required: true},
        allDay: {type: Boolean, required: true, default: false},
        venue: {type: String, required: true},
        role: {type: String, required: true},
        notes: {type: String},
    }
);
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;