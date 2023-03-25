const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const mongoose = require('mongoose');

const URI = process.env.URI;
mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
