var mongoose = require('mongoose');

module.exports = mongoose.model('auth', {
    "UserName": { type: String },
    "Password": { type: String }
})