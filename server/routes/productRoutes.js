const express = require("express");
const router = express.Router();
const product = require("../models/productModal");
const {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProduct,
} = require("../controller/productController");

router.get("/", getProducts);

//get single product
router.get("/:id", getProduct);

//put
router.post("/", createProducts);

// update a product
router.put("/:id", updateProducts);

// delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
