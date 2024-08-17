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

router.get("/getproducts", getProducts);

//get single product
router.get("/getproduct/:id", getProduct);

//put
router.post("/createproducts", createProducts);

// update a product
router.put("/update/:id", updateProducts);

// delete a product

router.delete("/delete/:id", deleteProduct);

module.exports = router;
