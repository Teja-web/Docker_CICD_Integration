const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;  // 👈 important
app.get("/", (req, res) => {
  res.send("Hello from Docker CI/CD app!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
