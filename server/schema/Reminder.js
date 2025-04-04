import mongoose from "../config/mongoose.js";
const { Schema } = mongoose;

const Reminder = new Schema({
  title: String,
  description: String,
  notification: Boolean,
});

export default Reminder;
