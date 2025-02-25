const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: String,
  imageUrl: String, // Store image URL instead of buffer for frontend access
});

module.exports = mongoose.model("Image", ImageSchema);
