const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

dotenv.config();

app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.OPENAI_APP_API_KEY});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});