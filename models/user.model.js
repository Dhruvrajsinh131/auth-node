import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hashedpassword: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("hashedpassword")) return next();

  this.hashedpassword = await bcrypt.hash(this.hashedpassword, 10);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.hashedpassword);
};

const USER = model("User", userSchema);

async function createUser(data) {
  const user = new USER(data);
  await user.save();
  return user;
}

export { createUser };
export default USER;
