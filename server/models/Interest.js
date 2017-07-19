const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const interestSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },
    
    liked: [String]
});


const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;