const express = require("express");
const app = express();
const path = require("path");

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("the app is running");
});

app.use("/api", require("./routes/booking"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 6000;

// Main Routes

app.listen(port, () => {
  console.log(`The app is running on port  ${port}`);
});
