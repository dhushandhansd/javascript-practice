import * as Mongoose from "mongoose";

const usersSchema = new Mongoose.Schema(
  {
    userName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    isVerified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
  }
);

const UserModel = Mongoose.model("User", usersSchema);

export default UserModel;