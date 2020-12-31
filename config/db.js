import mongoose from 'mongoose'

export const connectDB = async () => {
    const conn = await mongoose.connect( process.env.DB_URI, { useNewUrlParser: true });
    console.log( `MongoDB connected: ${ conn.connection.host}`);
}

