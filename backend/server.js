import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import path from 'path'
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';

import productRouter from "./routes/product.route.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000

// const __durname = path.resolve();

app.use(express.json())

app.use("/api/products", productRouter)


// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, "/frontend/dist")));
//     app.get("*", (req, res) => {
//         res.send(path.resolve(__dirname, "frontend", "dist", "index.html"))
//     })
// }

app.listen(PORT, () => {
    connectDB()
    console.log('server is runing ' + PORT);
    
})

