const express = require('express');
require('dotenv').config();
const app = express();

const connectDB = require('./auth/db');

PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));