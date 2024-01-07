import mongoose from "mongoose";

const feedbackModel = new mongoose.Schema({
    name:String,
    email:String,
    comment:String
});
export const Feedback = mongoose.models.feedbacks || mongoose.model("feedbacks",feedbackModel)