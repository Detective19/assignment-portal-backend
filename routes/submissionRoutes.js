const express = require("express");
const router = express.Router();

const { submitAnswer ,getSubmissionsForAssignment} = require("../controllers/submissionController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
 "/",
 authMiddleware,
 roleMiddleware("student"),
 submitAnswer
);

router.get(
 "/assignment/:assignmentId",
 authMiddleware,
 roleMiddleware("teacher"),
 getSubmissionsForAssignment
);
module.exports = router;