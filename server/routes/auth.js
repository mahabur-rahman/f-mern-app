const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../db/conn");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");

// home route
router.get("/", (req, res) => {
  res.send("<h1>from router</h1>");
});

// POST REQUEST | async/await

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(422).json({ error: "please fill the field" });
    }
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email is already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password are not matching" });
    } else {
      const createUser = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      // bcrypt password middleware work see to userSchema.js file 👍

      const result = await createUser.save();

      if (result) {
        res.status(201).json({ message: "User register successful" });
      }
    }
  } catch (err) {
    console.log(`Register method last error : ${err}`);
  }
});

// signin route
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill the field" });
    }

    const userLoginData = await User.findOne({ email: email });
    // console.log(userLoginData);
    if (userLoginData) {
      // bcrypt | hashing password check 👍
      const isMatch = await bcrypt.compare(password, userLoginData.password);

      // jwt token generate 👍
      token = await userLoginData.generateAuthToken();
      console.log(token);

      // cookie add 👍
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "User error password" });
      } else {
        res.json({ message: "User login successful" });
      }
    } else {
      return res.status(400).json({ message: "Invalid User Info" });
    }

    // if (!userLoginData) {
    //   res.status(400).json({ error: "User error" });
    // } else {
    //   res.json({ message: "User login successful" });
    // }
  } catch (err) {
    console.log(`Login route last error : ${err}`);
  }
});

// POST REQUEST
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "please fill the field" });
//   }
//   //   email check
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email is already exist" });
//       }
//       //   create a new user
//       const createUser = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });

//       //   save user
//       createUser
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User register successful" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Fail to register", message: err });
//         });
//     })
//     .catch((err) => {
//       console.log(`Register form error in post method : ${err}`);
//     });
// });

// about page authentication with middleware

router.get("/about", authenticate, (req, res) => {
  console.log("hello about page");
  res.send(req.rootUser);
});

// get user data for contact and home page
router.get("/getdata", authenticate, (req, res) => {
  console.log("hello contact page");
  res.send(req.rootUser);
});

// exports
module.exports = router;
