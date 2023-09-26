const express = require('express');
const app = express();
const listTask = require('./index');

app.get('/tasks', (req, res) => {
  res.json(listTask);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
