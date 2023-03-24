const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/test-imagine', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
