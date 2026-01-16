const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json()); // ✅ built-in body parser

/* =======================
   MONGODB CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

/* =======================
   MODELS
======================= */

// Contact Model
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
  })
);

// Cart Model
const CartItem = mongoose.model(
  "CartItem",
  new mongoose.Schema({
    perfumeId: Number,
    brand: String,
    perfume: String,
    price: Number,
    image: String,
  })
);

// Order Model
const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    perfumeId: Number,
    brand: String,
    perfume: String,
    price: Number,
    image: String,
    quantity: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
  })
);

/* =======================
   CONTACT ROUTE
======================= */
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    const msg = new Contact({ name, email, message });
    await msg.save();
    res.status(200).json({ message: "Message received" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/* =======================
   CART ROUTES
======================= */

// Get cart items
app.get("/cart", async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// Add to cart
app.post("/cart", async (req, res) => {
  try {
    const item = new CartItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to add cart item" });
  }
});

// Delete cart item
app.delete("/cart/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch {
    res.status(500).json({ error: "Delete failed" });
  }
});

/* =======================
   ORDER ROUTES
======================= */

// Create order
app.post("/orders", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch {
    res.status(500).json({ message: "Order failed" });
  }
});

// Get orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch {
    res.status(500).json({ message: "Fetch failed" });
  }
});

/* =======================
   START SERVER
======================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
