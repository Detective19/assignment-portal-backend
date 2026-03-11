const express = require("express");
const router = express.Router();

const { createAssignment, publishAssignment ,getAssignments , completeAssignment,getPublishedAssignments} = require("../controllers/assignmentController");

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
router.get(
 "/",
 authMiddleware,
 roleMiddleware("teacher"),
 getAssignments
);

router.put(
 "/:id/complete",
 authMiddleware,
 roleMiddleware("teacher"),
 completeAssignment
);

router.get(
 "/published",
 authMiddleware,
 roleMiddleware("student"),
 getPublishedAssignments
);

module.exports = router;