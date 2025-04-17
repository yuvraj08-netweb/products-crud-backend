import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";

const app = express();

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
  .connect(
    "mongodb+srv://yuvraj:FQftxqU2VFu2qTaE@backenddb.4uypxfy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected! to Database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Error in connecting to Database"));
