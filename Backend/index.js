import express from "express";
//import { app } from "./src/app.js";
import cors from 'cors'
const port = 3000;
const app = express()
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";

dotenv.config({
  path: "./env"
});

app.get("/", (req, res) => {
  res.json({message:'This is working fine'});
 
});
app.use(
  cors({
      origin:'*',
      credentials:true
  })
)
// when we use middleware
app.use(
  express.json({
      limit:"16kb",
  })
)

// to take the data from the url
app.use(
  express.urlencoded(
      {
          extended:true,
          limit:"16kb"
      }
  )
)

app.use(express.static("public"))
import userRouter from './src/Routes/Application.Routes.js'
app.use('/api/v1',userRouter)


connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log(`App is listening in the port 4000`);
    });
  })
  .catch((err) => {
    console.log("mongo db connnected failed !!! ", err);
  });
