const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware"); // for testing protected routes
const assignmentRoutes = require("./routes/assignmentRoutes");


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.use("/api/auth", authRoutes);

app.use("/api/assignments", assignmentRoutes);
app.get("/", (req, res) => {
  res.send("Sab thik hai!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});