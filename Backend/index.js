import express from "express";
import { app } from "./src/app.js";
const port = 3000;
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";

dotenv.config({
  path: "./env"
});

app.get("/", (req, res) => {
  res.json({message:'This is working fine'});
 
});

connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log(`App is listening in the port 4000`);
    });
  })
  .catch((err) => {
    console.log("mongo db connnected failed !!! ", err);
  });
