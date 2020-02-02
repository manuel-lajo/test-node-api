const express = require('express');

const app = express();

const courseRoutes = require('./routes/course');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
})

app.use('/course', courseRoutes);

app.listen(3000);
