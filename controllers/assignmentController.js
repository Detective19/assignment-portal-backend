const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {

  try {

    const { title, description, dueDate } = req.body;

    const assignment = new Assignment({
      title,
      description,
      dueDate,
      createdBy: req.user.id
    });

    await assignment.save();

    res.status(201).json({
      message: "Assignment created",
      assignment
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

exports.publishAssignment = async (req, res) => {

  try {

    const assignment = await Assignment.findById(req.params.id);

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found"
      });
    }

    if (assignment.status !== "draft") {
      return res.status(400).json({
        message: "Only draft assignments can be published"
      });
    }

    assignment.status = "published";

    await assignment.save();

    res.json({
      message: "Assignment published",
      assignment
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
exports.getAssignments = async (req, res) => {

  try {

    const filter = { createdBy: req.user.id };

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const assignments = await Assignment.find(filter);

    res.json(assignments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};