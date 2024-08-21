const Product = require("../models/productModal");
const asyncHandler = require("express-async-handler");

//get all products
const getProducts = asyncHandler(async (req, res, next) => {
  try {
    const product = await Product.find({}).sort("-createdAt");

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

//get product by id
const getProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// create product

const createProducts = asyncHandler(async (req, res, next) => {
  try {
    const { title } = req.body;
    const duplicateProduct = await Product.findOne({ name });

    if (duplicateProduct) {
      return res.status(409).json({ message: "Product already exists" });
    }

    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

// const createProducts = asyncHandler(async (req, res, next) => {
//   try {
//     const product = await Product.create(req.body);
//     console.log(product);
//     res.status(200).json(product);
//   } catch (err) {
//     next(err);
//   }
// });

//update product
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

const getTotalProduct = asyncHandler(async (req, res, next) => {
  try {
    const result = await Product.find({}).count();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      res.status(404).json({ message: `Product not found` });
    }

    res
      .status(204)
      .json({ message: "Product deleted" })
      .send({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
});
module.exports = {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProduct,
  getTotalProduct,
};
