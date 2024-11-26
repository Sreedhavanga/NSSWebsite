const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// TFI Data Schema
const tfiDataSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true }, // Ensure unique date
  participants: [
    {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
    },
  ],
});

const TFIData = mongoose.model("TFIData", tfiDataSchema);

// BDC Data Schema
const bdcDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const BDCData = mongoose.model("BDCData", bdcDataSchema);

// Freshers Data Schema
const freshersDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const FreshersData = mongoose.model("FreshersData", freshersDataSchema);

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare passwords
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during login." });
  }
});

// TFI Registration Route
app.post("/register", async (req, res) => {
  const { date, participants } = req.body;

  if (!date || !participants || participants.length === 0) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the date is already registered
    const existingData = await TFIData.findOne({ date });
    if (existingData) {
      return res.status(400).json({ message: "Registration for this date already exists." });
    }

    // Save the registration data
    const newTFIData = new TFIData({ date, participants });
    await newTFIData.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during registration." });
  }
});

// BDC Data Route
app.post("/bdcData", async (req, res) => {
  try {
    const newBDCData = new BDCData(req.body);
    await newBDCData.save();
    res.status(201).json({ message: "BDC Data saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving BDC Data." });
  }
});

// Freshers Data Route
app.post("/freshersData", async (req, res) => {
  try {
    const newFreshersData = new FreshersData(req.body);
    await newFreshersData.save();
    res.status(201).json({ message: "Freshers Data saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving Freshers Data." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
