// filepath: /root/primer_repo_platzi/server.js
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/spotify-key', async (req, res) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});