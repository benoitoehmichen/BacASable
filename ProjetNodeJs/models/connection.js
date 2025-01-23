const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://benoitoehmichen:mcfRMzyu7QI8kn0r@cluster0.hoi40iy.mongodb.net/capsule2_projet";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
