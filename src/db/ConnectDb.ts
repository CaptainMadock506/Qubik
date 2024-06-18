import { config } from 'dotenv';
import mongoose from 'mongoose';

config(); 

type DBConnectionObject = {
    isConnected?: boolean;
};

const connection: DBConnectionObject = {};

const ConnectDB = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Already connected to the database!!!");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI!, {});

        connection.isConnected = db.connections[0].readyState === 1;
        if (connection.isConnected) {
            console.log("Connection to MongoDB successful!!");
        } else {
            throw new Error("MongoDB connection not established");
        }
    } catch (error) {
        console.error("Failed to connect to MongoDB!! Error:", error);
        process.exit(1);
    }
};

export default ConnectDB;