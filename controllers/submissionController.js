const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");

exports.submitAnswer = async (req, res) => {

  try {

    const { assignmentId, answer } = req.body;

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found"
      });
    }

    if (assignment.status !== "published") {
      return res.status(400).json({
        message: "Assignment is not open for submissions"
      });
    }

    const existingSubmission = await Submission.findOne({
      assignmentId,
      studentId: req.user.id
    });

    if (existingSubmission) {
      return res.status(400).json({
        message: "You have already submitted this assignment"
      });
    }

    const submission = new Submission({
      assignmentId,
      studentId: req.user.id,
      answer
    });

    await submission.save();

    res.status(201).json({
      message: "Answer submitted successfully",
      submission
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};