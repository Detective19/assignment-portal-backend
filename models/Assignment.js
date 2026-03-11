const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  dueDate: { // Deadline for the assignment
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ["draft", "published", "completed"],
    default: "draft"
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the teacher who created the assignment
    ref: "User",
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Assignment", assignmentSchema);