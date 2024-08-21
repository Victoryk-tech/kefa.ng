const express = require("express");
const router = express.Router();
const product = require("../models/productModal");
const {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProduct,
  getTotalProduct,
} = require("../controller/productController");
const rateLimitMiddleware = require("../middleware/rateLimit");

//const router = express.Router();
router.get("/getproducts", getProducts);

//get single product
router.get("/getproduct/:id", getProduct);

//put
router.post("/createproduct", rateLimitMiddleware, createProducts);

// update a product
router.put("/update/:id", updateProducts);

// delete a product

router.delete("/delete/:id", deleteProduct);
router.get("/getTotalProduct", getTotalProduct);

module.exports = router;
