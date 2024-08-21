const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a product title"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    oldprice: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add product category"],
      trim: true,
      lowercase: true,
    },
    brand: {
      type: String,
      required: [true, "Please add product brand"],
      trim: true,
      lowercase: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: [String],
      default: "As Seen",
      trim: true,
    },
    size: {
      type: [String],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "Please add product quantity"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema); //product model

module.exports = Product;
