const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
    email: { type: 'String', required: true },
    createdAt: { type: 'Date', requred:false, default: Date.now }
});

module.exports = model('user', userSchema);