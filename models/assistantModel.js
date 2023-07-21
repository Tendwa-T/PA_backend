const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const client = require('./clientModel');
const assistantSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: [true, 'Email already exists']},
        password: {type: String, required: true},
        clientEmail: {type: String, required: false},

    }
);

assistantSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    const refDoc = await client.findOne({email: this.clientEmail});
    if(!refDoc){
        console.log('Client does not exist');
    }
    const updatedClient = await client.findOneAndUpdate({email: this.clientEmail}, {$push: {assistantEmail: this.email}});
    client.save();
    next();
});