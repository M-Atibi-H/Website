const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace 'YOUR_API_KEY' with your actual API key from API Ninjas
const API_KEY = 'Ot28mMZlv6k4ttzYvKAA0Q==gsjSjZUAsL2qGe3O';
const BASE_URL = 'https://api.api-ninjas.com/v1/webscraper';

// Endpoint to scrape a URL
app.get('/scrape', async (req, res) => {
    const urlToScrape = req.query.url;
    
    if (!urlToScrape) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: { url: urlToScrape },
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while scraping the URL' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});