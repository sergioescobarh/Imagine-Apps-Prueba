const mongoose = require('mongoose');
//mongodb://localhost:27017/test-imagine
//mongodb+srv://sergioescobarhenao:<password>@cluster0.zhepa2o.mongodb.net/test
mongoose
  .connect('mongodb+srv://sergioescobarhenao:AMg7e1dLhieNrSEU@cluster0.zhepa2o.mongodb.net/test-imagine', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(err));
