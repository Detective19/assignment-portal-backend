const express = require("express");
const router = express.Router();

const { createAssignment } = require("../controllers/assignmentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("teacher"),
  createAssignment
);

module.exports = router;