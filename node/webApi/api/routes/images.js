const mongoose = require("mongoose");
const express = require("express");
const images = require("../model/imageModel");
const router = express.Router();
const multer = require("multer");

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in "uploads" folder // saving our photo in this folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Upload Image API
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = `http://127.0.1:4500/storage/${req.file.filename}`; // we are storing this link in mongoDB
    const newImage = new images({ name: req.file.originalname, imageUrl });
    await newImage.save();
    res.json({ message: "Image uploaded successfully!", imageUrl });
  } catch (err) {
    console.error("Error in /upload:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

// Fetch Images API
router.get("/", async (req, res) => {
  const img = await images.find();
  res.json(img);
});

module.exports = router;
