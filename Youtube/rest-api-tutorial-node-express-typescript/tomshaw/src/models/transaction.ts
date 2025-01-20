import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

export interface itemType {
  title: string;
  price: number;
  quantity: number;
}

export interface ITransaction extends Document {
  description: string;
  total: number;
  user: ObjectId;
  business: string;
  items: itemType[];
  date: Date;
}

const TransactionSchema: Schema = new Schema({
  description: { type: String, required: true },
  total: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  business: { type: String, required: true },
  items: [
    {
      title: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  date: { type: Date, default: Date.now },
});

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
