import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://rahulray7:Rahulray7@cluster0.z9prrjn.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true }
);
