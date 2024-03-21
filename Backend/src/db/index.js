import mongoose from 'mongoose'

import { DB_NAME } from '../constants.js';

const connectDB = async ()=>{

    try {
       const connectionInstance = await mongoose.connect(`mongodb+srv://aloktamrakar2:AlokTam1234@cluster1.0spant1.mongodb.net/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        
        console.log("MONGODB connection error : ",error);
        process.exit(1);
    }
}

export default connectDB
