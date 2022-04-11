const User = require("../models/user");
const bcrypt = require('bcrypt');
// sing up
exports.postAuth = async (req, res, next) => {
    try {
    const hashedPassword= await bcrypt.hash(req.body.password, 12)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
 
    await user.save();
    res.status(201).send("auth get router");
  } catch (error) {

    console.log(error);
    res.send(error)
  }
};


exports.postLogin = async (req, res, next) => {
    try {

    const user = await User.findOne({ email: req.body.email})
    if(!user)
    res.status(400).json({error:"no user found"})
    const hashedPassword= await bcrypt.hash(req.body.password, 12)


     const isMatched = await bcrypt.compare(user.password, hashedPassword)

     console.log(isMatched);

     if(isMatched)
     res.status(200).json({isMatched: isMatched})
     else
     res.status(400).json({isMatched: isMatched})

     

  } catch (error) {
    res.status(500).json(error)  }
};