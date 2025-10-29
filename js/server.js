    const https = require('https');
    const fs = require('fs');
    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = process.env.env || 3000;

    // Serve static files from the 'public' directory
    app.use(express.static(path.join(__dirname, 'Starter\assets\images')));

    // Define a route to serve the main HTML file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'Starter\assets\images', 'Starter\index.html'));
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });