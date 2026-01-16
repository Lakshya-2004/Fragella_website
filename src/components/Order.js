const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  perfumeId: Number,
  brand: String,
  perfume: String,
  price: Number,
  image: String,
  quantity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);

