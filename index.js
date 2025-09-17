import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("AI Agent is running 🚀");
});

app.get("/checking-update", (req, res) => {
  res.send("Checking update");
});

app.get("/run-agent", (req, res) => {
  res.send("Agent started");
  
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
