const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = require('./routes/user');
const products = require('./routes/product');

app.use('/api/products', products);
app.use('/api/users', users);

module.exports = app;
