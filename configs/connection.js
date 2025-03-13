import { connect } from "mongoose";

export const connectToMongo = async () => {
  try {
    const start = Date.now();
    console.log("Connecting to MongoDB...");

    await connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected in ${Date.now() - start}ms`);
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};
