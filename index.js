import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//MiddleWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Hello From Node API Server");
});

// Connecting with mongodb server and then starting the server
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected! to Database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => console.log("Error in connecting to Database"));
