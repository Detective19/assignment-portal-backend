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