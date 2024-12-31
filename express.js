const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (request, response) => {
  response.send("Hello Pineconers! This is an Express app.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
