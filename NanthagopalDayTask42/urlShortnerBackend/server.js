const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors"); // Import the cors library
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const Customer = require("./models/Customer");

require("dotenv").config();

const app = express();

// Define CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the origin of your frontend application
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (cookies, authorization headers)
  optionsSuccessStatus: 204, // HTTP status code for successful preflight requests
};

app.use(cors(corsOptions)); // Use cors middleware with the defined options
app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

//Connect to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.post("/api/register", async (req, res) => {
  const { username,firstname,lastname, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = new Customer({ username, firstname, lastname, password: hashedPassword });

  try {
    await customer.save();
    res.json({ message: "User Registered Successfully!!!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while registering the user!" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const customer = await Customer.findOne({ username });

  if (!customer) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! User does not exists." });
  }

  const passwordMatch = await bcrypt.compare(password, customer.password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! Password does not match." });
  }

  const token = jwt.sign(
    { username: customer.username, role: "Mentor" },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.post("/reset-password", async (req, res) => {
  const { username, email } = req.body;

  const customer = await Customer.findOne(username);

  if (!customer) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! User does not exist." });
  }

  if (!email == customer.username) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! Email does not match." });
  }

  const token = jwt.sign(
    { username: customer.username, role: "Mentor" },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});


app.get("/api/home", (req, res) => {
  res.json({ message: "Home page accessed successfully!!!" });
});

app.post("/confirmation", async (req, res) => {
  const { username, password, confirm_password } = req.body;

  // Check if the provided passwords match
  if (password !== confirm_password) {
    return res.status(401).json({ message: "Password confirmation failed." });
  }

  try {
    // Find the user by username (or email, if that's your unique identifier)
    const user = await Customer.findOne(username);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication Failed! User does not exist." });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while changing the password." });
  }
});


app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
