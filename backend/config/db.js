// import mongoose from "mongoose";
// import dbconnect from 'mongodb-ci'


// export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app').then(()=>{
//         console.log('DB connected') ;
//         dbconnect();
//     })
// }
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // stop the server if DB fails
  }
};
