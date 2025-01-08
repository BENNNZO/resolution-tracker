import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
    throw new Error('Please add your MongoDB URI to the .env.local file');
}

async function connectDB() {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri, options);
        }
        return mongoose;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error('Failed to connect to the database');
    }
}

export default connectDB;