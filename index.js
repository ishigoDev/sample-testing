import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("AI Agent is running 🚀");
});

app.get("/", (req, res) => {
  res.send("AI Agent is running 🚀");
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
