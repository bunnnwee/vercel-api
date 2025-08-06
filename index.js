const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
const jobId = "Fuck you";
app.post('/submit', (req, res) => {
    jobId = req.body.jobId;
})
app.get('/', (req, res) => {
    res.send(jobId)
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});