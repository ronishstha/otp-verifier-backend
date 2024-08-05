const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = 3000;

dotenv.config();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const INPUT_SIZE = 6;

app.get("/", (req, res) => {
  res.send("Initializad!");
});

app.post("/verify", (req, res) => {
  const { code } = req.body;
  if (code.slice(-1) === "7" || code.length !== INPUT_SIZE) {
    res.status(400).json({
      success: false,
      message: "Verification Error!",
    });
  }
  res.status(200).json({
    success: true,
    message: "Code verified successfully!",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
