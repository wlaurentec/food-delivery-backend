import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://wlaurente7:pyIn1NQrzgb1Dqdb@cluster0.ybsj8.mongodb.net/food-del"
    )
    .then(() => console.log("MongoDB connected"));
};
