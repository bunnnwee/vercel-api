const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const jobId = req.body.jobId;

    fs.writeFile("jobid.txt", jobId, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("Job ID saved successfully.");
            res.send("Job ID saved successfully.");
        }
    });
})
app.get('/', (req, res) => {
    fs.readFile("jobid.txt", "utf8", (err, data) => {
        if (data) {
            res.send(data);
        }
    })
}

);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});