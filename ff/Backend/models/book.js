const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

const quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    page_number: {
        type: Number,
        required: true
    }
});

const variantSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "Author"
    },
    published_date: {
        type: Date,
        required: true
    },
    page_count: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    quotes: [quoteSchema],
    description: {
        type: String,
        required: true
    },
    variants: {
        paperback: variantSchema,
        audiobook: variantSchema,
        ebook: variantSchema
    },
    category: {
        type: String,
        enum: ['fiction', 'non-fiction', 'poetry', 'drama', 'science', 'philosophy', 'history', 'biography'],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
