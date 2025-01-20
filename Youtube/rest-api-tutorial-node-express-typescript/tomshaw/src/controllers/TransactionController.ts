import { Request, Response } from "express";
import httpResponse from "../lib/httpResponse";
import User from "../models/user";
import Transaction, { itemType, ITransaction } from "../models/transaction";

/**Post the transaction and update the balance for the user in the database */
export const PostTransactionAndUpdateUserBalance = async (
  req: Request & {
    body: {
      user: string;
      total: number;
      description: string;
      date: Date;
      business: string;
      items: {
        title: string;
        price: number;
        quantity: number;
      }[];
    };
  },
  res: Response
) => {
  try {
    const { user, total, description, date, business, items } = req.body;
    //valdating the incoming data
    /**check if any responses are missing */
    if (!user || !total || !description || !date || !business) {
      return httpResponse(400, "Missing required fields", {}, res);
    }
    /**check if total is a whole number */
    if (!Number.isInteger(total)) {
      return httpResponse(400, "Total should be a whole number", {}, res);
    }

    /**check if items is an array */
    if (!Array.isArray(items)) {
      return httpResponse(400, "Items must be an array", {}, res);
    }

    /** check if the there are items in the array then check whether the title, price or the quantity is missing or not */

    if (items.length > 0) {
      const invalidItem = items.find((item: itemType) => {
        !item.title || !item.price || !item.quantity;
      });
      if (invalidItem) {
        return httpResponse(
          400,
          "Items must have an title, price and quantity",
          {},
          res
        );
      }
    }

    /** check if the user exists */
    const userDoc = await User.findById(user);
    if (!userDoc) {
      return httpResponse(400, "User not found", {}, res);
    }

    // inserting the incoming transactions into the DB
    const transactionDoc: ITransaction = new Transaction({
      total: total,
      user: user,
      description: description,
      date: date,
      business: business,
      items: items,
    });

    await transactionDoc.save();

    //updating the userBalance in the DB
    userDoc.balance += total;
    await userDoc.save();

    //return the transaction data as response
    return httpResponse(
      201,
      "Transaction created successfully",
      {
        transaction: {
          id: transactionDoc._id,
          user: transactionDoc.user,
          total: transactionDoc.total,
          description: transactionDoc.description,
          date: transactionDoc.date,
          business: transactionDoc.business,
          items: transactionDoc.items,
        },
      },
      res
    );
  } catch (error) {
    console.log(error);
    return httpResponse(500, "Internal Server Error", {}, res);
  }
};
