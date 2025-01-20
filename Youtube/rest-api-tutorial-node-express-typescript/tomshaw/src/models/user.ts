import crypto from "crypto";
import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  balance: number;
  imageUrl: string;
  color: string;
  setPassword: (password: string) => void;
  validatePassword: (password: string) => boolean;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  balance: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  color: { type: String, required: true },
  passwordHash: { type: String, required: true },
  passwordSalt: { type: String, required: true },
});

//set the password hash
UserSchema.methods.setPassword = function (password: string) {
  this.passwordSalt = crypto.randomBytes(16).toString("hex");
  this.passwordHash = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512")
    .toString("hex");
  return;
};

// validate the password entered by user
UserSchema.methods.validatePassword = function (password: string) {
  const hash: string = crypto
    .pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512")
    .toString("hex");
  return hash === this.passwordHash;
};

export default mongoose.model<IUser>("User", UserSchema);
