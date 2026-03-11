const express = require("express");
const router = express.Router();

const { submitAnswer } = require("../controllers/submissionController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
 "/",
 authMiddleware,
 roleMiddleware("student"),
 submitAnswer
);

module.exports = router;