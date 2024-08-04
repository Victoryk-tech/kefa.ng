const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");

//get all blogs
const getProducts = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.find({});

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

//blog by id
const getProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

const createProducts = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});
const updateProducts = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});
const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404);
      res.status(500);
      throw new Error(`cannot find any product with ID ${id}`);
    }

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});
module.exports = {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProduct,
};
