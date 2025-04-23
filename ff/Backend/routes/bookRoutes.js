const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// CREATE: Yangi kitob qo'shish
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ: Barcha kitoblarni o'qish va qidirish
router.get('/', async (req, res) => {
    try {
        // Querydan qidirish so'zlarini olamiz
        const { search } = req.query;

        // Qidiruv shartini yaratamiz
        let searchCriteria = {};

        if (search) {
            searchCriteria = {
                $or: [
                    { name: { $regex: search, $options: 'i' } }, // Kitob nomi bo'yicha qidiruv (case insensitive)
                    { description: { $regex: search, $options: 'i' } }, // Tavsif bo'yicha qidiruv (case insensitive)
                    { "quotes.quote": { $regex: search, $options: 'i' } } // Iqtibos bo'yicha qidiruv (case insensitive)
                ]
            };
        }

        // Kitoblarni muallif ma'lumotlari bilan birga topamiz va qidiruv shartini qo'llaymiz
        const books = await Book.find(searchCriteria).populate('author');

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// READ: Bitta kitobni o'qish
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author');
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE: Kitobni yangilash
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Yangilangan kitobni qaytarish uchun
            runValidators: true // Validatorlarni ishga tushirish uchun
        });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Kitobni o'chirish
router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
