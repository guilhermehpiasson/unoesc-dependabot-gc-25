const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com');
        const data = _.pick(response.data, ['current_user_url', 'authorizations_url']);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from GitHub API');
    }
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});