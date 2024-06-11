import mongoose from "mongoose";

const connectToMongodb = async () => {
  await mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("database connected");
  });
};
export default connectToMongodb;
