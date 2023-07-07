const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");


router.post("/register", async (req, res) => {
  try {
    const userData = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const postData = await userData.save();
    res.send(postData);
  } catch (err) {
    console.log( err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const email=req.body.email;
    console.log(req.body);
    const password=req.body.password

    const user =await User.findOne({email});

    console.log(user);

    if (!user){
      return res.status(404).json({message:'user not found'})
    }

    if(password===user.password){
      res.json("logged successfully")
    }else{
      res.json("wrong username or password")
    }
    
  } catch (err) {
    console.log( err);
  }
});

module.exports = router;
