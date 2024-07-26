import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function () {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://srvsingh003:raja1234@cluster0.ozu0tk8.mongodb.net/${DB_NAME}`
    );
    console.log("Connected to mongo db database", connection);
  } catch (error) {
    console.log("Mongo db connection", error);
    process.exit(1);
  }
};

const Cat = mongoose.model("Cat", { name: String, sex: String });

// const kitty = new Cat({ name: "Zildjian", sex: "male" });
// kitty.save().then(() => console.log("meow"));

export default connectDB;
