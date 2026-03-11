const express = require("express");
const router = express.Router();

const { createAssignment, publishAssignment } = require("../controllers/assignmentController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("teacher"),
  createAssignment
);

router.put(
  "/:id/publish",
  authMiddleware,
  roleMiddleware("teacher"),
  publishAssignment
);

module.exports = router;