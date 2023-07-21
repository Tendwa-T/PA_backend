const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const clientSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: [true, 'Email already exists']},
        password: {type: String, required: true},
        assistantEmail: {type: String, required: false},
    }
);

const Client = mongoose.model('Client', clientSchema);