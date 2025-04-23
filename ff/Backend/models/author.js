const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    death_date: {
        type: Date,
        default: null // Optional, author may still be alive
    },
    photo: {
        type: String, // URL to the author's photo
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    literature_biography: {
        type: String,
        required: true
    },
    works: [{
        type: mongoose.Types.ObjectId, // List of notable works by the author
        ref: "Book"
    }]
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
