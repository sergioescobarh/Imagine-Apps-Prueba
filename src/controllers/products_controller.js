const productsCtrl = {};

const Product = require('../models/product');

productsCtrl.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//update product user
productsCtrl.setUser = async (req,res) => {
  
  if(Product.findOne(req.params.id)==undefined||Product.findOne(req.params.id)!=req.body.user){
    await Product.updateOne({ _id: req.params.id }, { $set: { user: req.body.user } });
  };
  }
  

module.exports = productsCtrl;
