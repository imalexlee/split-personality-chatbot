//use npm to install express and openai packages
require("dotenv").config();
const express = require("express");
const app = express();
const OpenAI = require("openai");

if (!process.env.OPENAI_API_KEY) {
  console.error("You must enter your openAI api key in the .env file");
  process.exit();
}
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  console.log(req.body);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: req.body.messages,
  });
  res.json({ message: response.choices[0].message.content });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
