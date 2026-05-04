import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error("MONGODB_URI is not set in .env");
    }

    const connectionString = mongoUri.includes(`/${DB_NAME}`)
        ? mongoUri
        : `${mongoUri}/${DB_NAME}`;

    try {
        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION error", error);
        process.exit(1);
    }
};

export default connectDB;