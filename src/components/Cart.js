const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  perfumeId: Number,
  brand: String,
  perfume: String,
  price: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
