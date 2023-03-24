const usersCtrl = {};

const User = require('../models/user');

//get users
usersCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

//create user
usersCtrl.createUser = async (req,res) => {
    const {name,lastName,email} = req.body; 
    await User.create({name,lastName,email}).then(
        res.json({...req.body}));
    
};

module.exports= usersCtrl;
