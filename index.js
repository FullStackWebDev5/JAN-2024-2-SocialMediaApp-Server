const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/users')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(userRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Social Media App');
});

app.listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log('Server is running :)'))
      .catch((error) => console.log(error));
});




























/*
  # [Future] Authentication & Authorization 
    - Password
    - Middlewares
*/