const Submission = require("../models/Submission");
const Assignment = require("../models/Assignment");

exports.submitAnswer = async (req, res) => {

  try {

    const { assignmentId, answer } = req.body;

    // can't submit empty answer
    if (!answer || answer.trim() === "") {
      return res.status(400).json({
        message: "Answer cannot be empty"
      });
    }

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

    if (new Date() > assignment.dueDate) {
        return res.status(400).json({
        message: "Submission deadline has passed"
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


exports.getSubmissionsForAssignment = async (req, res) => {

  try {

    const submissions = await Submission.find({
      assignmentId: req.params.assignmentId
    }).populate("studentId", "name email");

    res.json(submissions);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.getMySubmissions = async (req, res) => {

  try {

    const submissions = await Submission.find({
      studentId: req.user.id
    }).populate("assignmentId", "title description dueDate");

    res.json({totalSubmissions: submissions.length,
      submissions});

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};