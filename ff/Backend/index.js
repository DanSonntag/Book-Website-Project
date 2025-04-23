const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS modulini import qilish
const app = express();

// Routes for CRUD operations
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.use(cors()); // CORS ni qo'llash
app.use(bodyParser.json()); // JSON body parsing
const PORT = 3000;

// MongoDB ulanish
mongoose.connect('mongodb+srv://dansonntag2:pRRbfPDKkQtYzgK8@cluster0.jibvd6m.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch(err => console.log(err));

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
