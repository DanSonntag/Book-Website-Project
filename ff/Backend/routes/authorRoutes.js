const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// CREATE: Yangi muallif qo'shish
router.post('/', async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ: Barcha mualliflarni o'qish
// READ: Barcha mualliflarni o'qish va qidirish
router.get('/', async (req, res) => {
    try {
        // Querydan qidiruv so'zini olamiz
        const { search } = req.query;

        // Qidiruv shartini yaratamiz
        let searchCriteria = {};

        if (search) {
            searchCriteria = {
                $or: [
                    { first_name: { $regex: search, $options: 'i' } }, // Ism bo'yicha qidiruv (case insensitive)
                    { last_name: { $regex: search, $options: 'i' } }, // Familiya bo'yicha qidiruv (case insensitive)
                    { biography: { $regex: search, $options: 'i' } } // Biografiya bo'yicha qidiruv (case insensitive)
                ]
            };
        }

        // Mualliflarni topish va ularning ishlari bilan birga jo'natish
        const authors = await Author.find(searchCriteria).populate('works');

        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// READ: Bitta muallifni o'qish
router.get('/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).populate('works');
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE: Muallifni yangilash
router.put('/:id', async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Yangilangan muallifni qaytarish uchun
            runValidators: true // Validatorlarni ishga tushirish uchun
        });
        if (!updatedAuthor) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Muallifni o'chirish
router.delete('/:id', async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        if (!deletedAuthor) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
