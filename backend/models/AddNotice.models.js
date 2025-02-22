import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  attachment: {
    name: String,
    type: String,
    data: String, // Base64 data
  },
  date: { type: Date, default: Date.now },
});

const NoticeModel = mongoose.model("Notice", noticeSchema);
export default NoticeModel;
