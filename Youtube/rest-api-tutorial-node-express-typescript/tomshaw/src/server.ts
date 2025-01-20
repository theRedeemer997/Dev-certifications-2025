import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./lib/dbConnection";
import bodyParser from "body-parser";

async function start() {
  //load the environment variables
  dotenv.config({
    path: "./.env",
  });

  // connect to the database
  await connectToDatabase();

  // create a new application
  const app = express();

  //use body parser as we will be sending json data to the endpoint
  app.use(bodyParser.json());

  //use the transaction router here
  const transactionRouter = await import("./routes/transactions");
  app.use("/transactions", transactionRouter.default);

  //api get endpoint that displays hello world
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running in port, http://localhost:${process.env.PORT}`
    );
  });
}

start();
