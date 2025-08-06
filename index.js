const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
let jobId = "No job submitted yet";

// Fixed /submit route
app.get('/submit', (req, res) => {
    if (req.query.jobId) {
        jobId = req.query.jobId;
        res.send(`Job ID updated to: ${jobId}`);
    } else {
        res.status(400).send('Missing jobId parameter');
    }
});

app.get('/', (req, res) => {
    res.send(jobId);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});