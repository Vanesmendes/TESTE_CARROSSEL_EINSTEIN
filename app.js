const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

app.get("/", (req, res) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const token = req.query["hub.verify_token"];

  if (verifyToken && mode === "subscribe" && token === verifyToken && challenge) {
    console.log("WEBHOOK VERIFIED");
    return res.status(200).type("text/plain").send(challenge);
  }

  return res.sendStatus(403);
});

app.post("/", (req, res) => {
  console.log("Webhook received", new Date().toISOString());
  console.log(JSON.stringify(req.body, null, 2));
  return res.sendStatus(200);
});

app.listen(port, "0.0.0.0", () => {
  console.log("Listening on port", port);
});
