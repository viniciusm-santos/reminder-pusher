// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.write("Hello");
//   res.end(JSON.stringify({ data: "done" }));
// });

// server.listen(3000, "localhost", () => {
//   console.log("server running");
// });

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const reminders = [];

app.get("/", (req, res) => {
  res.json({ test: "tesss" });
});

app.post("/reminder", (req, res) => {
  console.log(req.body);

  if (!req.body) {
    res.send("Cadê o body?");
  }

  reminders.push(req.body);
  res.send("Saved");
});

app.get("/reminders", (req, res) => {
  res.send(JSON.stringify(reminders));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
