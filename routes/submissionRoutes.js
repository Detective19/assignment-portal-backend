const express = require("express");
const router = express.Router();

const { submitAnswer ,getSubmissionsForAssignment,getMySubmissions} = require("../controllers/submissionController");

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

router.get(
 "/my",
 authMiddleware,
 roleMiddleware("student"),
 getMySubmissions
);
module.exports = router;