const express = require('express');

const app = express();

const courseRoutes = require('./routes/course');

app.use('/course', courseRoutes);

app.listen(3000);
