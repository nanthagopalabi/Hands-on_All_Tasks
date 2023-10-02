const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var nodemailer=require('nodemailer');
require("dotenv").config();

const JWT_SECRET =  process.env.JWT_SECRET;
const mongoUrl =process.env.mongoUrl;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  // Hash the user's password
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if a user with the provided email already exists
    const OldUser = await User.findOne({ email });
    if (OldUser) {
      return res.json({ error: "User Exists" });
    }

    // Create a new user document in the database
    const newUser = new User({
      fname,  
      lname,   
      email,   
      password: encryptedPassword,
    });

    await newUser.save(); // Save the new user
    res.json({ status: "ok" }); // Send a response indicating successful registration
  } catch (error) {
    // Handle any errors and send an appropriate response
    console.error(error);
    res.json({ status: "error", error: error.message });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }

    // Compare the provided password with the hashed password
    if (await bcrypt.compare(password, user.password)) {
      // Passwords match, generate a JWT
      const token = jwt.sign({ email: user.email }, JWT_SECRET);

      // Send the JWT as a response, indicating successful login
      return res.json({ status: "ok", data: token });
    } 
    else {
      return res.json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    res.json({ status: "error", error: "An error occurred during login." });
  }
});

app.get("/home", (req, res) => {
  res.json({ message: "Home page accessed successfully!!!" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: user.email })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1hr",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      }
    });

    var mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: oldUser.email,
      subject: 'Password Reset Flow',
      text: `Click the link ${link}`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error(error);
        return res.json({ status: "error", error: "Failed to send email." });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ status: "Reset token sent successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    res.json({ status: "An error occurred during password reset." });
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.json({ status: "User Not Found" });
    }

    // Update the user's password with the new one
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    user.password = encryptedPassword;

    // Save the updated user document
    await user.save();

    // Clear the random string (if any) used for the reset
    // This might involve updating a field in your user schema

    res.json({ status: "Password Reset Successfully" });
  } catch (error) {
    console.error(error);
    res.json({ status: "An error occurred during password reset." });
  }
});

app.get("/verify-token/:token", async (req, res) => {
  const { token } = req.params;

  // Query the database to verify if the token exists and is valid
  const isValid = await verifyTokenInDatabase(token);

  if (isValid) {
    // Token is valid, you can send a success response
    res.json({ status: "Token Verified" });
  } else {
    // Token is invalid, send an error response
    res.status(400).json({ status: "Token Invalid" });
  }
});


app.listen(5000, () => {
  console.log("Server Started");
});