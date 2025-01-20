import { Request, Response } from "express";
import user from "../models/user";
import httpResponse from "../lib/httpResponse";

/**add the user to the database */
export const AddUser = async (
  req: Request & {
    body: {
      name: string;
      email: string;
      balance: number;
      imageUrl: string;
      color: string;
      password: string;
    };
  },
  res: Response
) => {
  try {
    let { name, email, balance, imageUrl, color, password } = req.body;
    const userDoc = new user({
      name: name,
      email: email,
      balance: balance,
      imageUrl: imageUrl,
      color: color,
    });
    userDoc.setPassword(password);
    await userDoc.save();

    return httpResponse(
      201,
      "user created successfully",
      {
        user: {
          id: userDoc._id,
          name: userDoc.name,
        },
      },
      res
    );
  } catch (error) {
    console.log(error);
    return httpResponse(500, "Internal Server Error", {}, res);
  }
};
