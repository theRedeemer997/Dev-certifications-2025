import mongoose from "mongoose";

export const connectToDatabase = async () => {
  const db = (await mongoose.connect(process.env.MONGODB_URI as string))
    .connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("DB is connected");
  });
  return db;
};

export const disconnectDatabase = async () => {
  await mongoose.disconnect();
  console.log("DB is disconnect");
};
