
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Resume = require('./models/Resume');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/resume');
});

app.get('/resume', async (req, res) => {
    try {
        const resume = await Resume.findOne().lean();

        if (!resume) {
            return res.status(404).send(
                'Resume not found. Run node seed.js first.'
            );
        }

        res.render('resume', { resume });
    } catch (error) {
        console.error('Error fetching resume:', error);
        res.status(500).send('Unable to load resume.');
    }
});

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(
                `Server running at http://localhost:${PORT}/resume`
            );
        });
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exitCode = 1;
    }
}

startServer();
