const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Title of the content"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Please Enter the content"],
  },
  topic: {
    type: String,
    required: [true, "Please Enter the Topic of the content"],
    trim: true,
  },
  difficulty: {
    type: String,
    required: [true, "Please Enter the difficulty level of the content"],
    trim: true,
  },
  level: {
    type: String,
    required: [true, "Please enter the level of the content"],
    trim: true,
  },
  images: [
    {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
        
      },
    },
  ],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedBy:{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  updatedOn:{
    type: Date,
  }
});


module.exports = mongoose.model("Content", contentSchema);