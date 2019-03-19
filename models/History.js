import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  date: String,
  title: {
    type: String,
    required: "Title is required"
  },
  description: String
});

const model = mongoose.model("History", HistorySchema);
export default model;
