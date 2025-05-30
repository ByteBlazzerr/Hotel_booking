import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async()=>{
//     try{
//         mongoose.connection.on('connected',()=>console.log("Database Connected"));

//         await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }

// // export 