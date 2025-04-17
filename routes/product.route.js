import express from "express";
import multer from "multer";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const upload = multer();
const router = express.Router();

// GET all products
router.get("/", getProducts);

// Get Product by id
router.get("/:id", getProductById);

// Create Product
router.post("/", upload.none(), createProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

// Export the router
export default router;
