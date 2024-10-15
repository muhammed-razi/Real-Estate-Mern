const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");
const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");
const app = express();

// mongodb connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB has been started successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


// routes & middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use("/auth", authController)
app.use("/property", propertyController)
app.use("/upload", uploadController)
app.use("/yacht", yachtController);
app.use('/user', userController)
app.use('/comment', commentController)


// starting server
app.listen(process.env.PORT, () =>console.log('server has been started'))