import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Mongodb database connected"),
    );
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Mongodb connection error:", error);
  }
};

export default connectMongoDb;
