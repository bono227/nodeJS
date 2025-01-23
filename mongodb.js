require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./src/routes/task");
const authRoutes = require("./src/routes/auth");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("GET request received at '/' path. you did it number 2!");
});

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    console.log("Connected to MongoDB"),
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    })
  )
  .catch((error) => console.error(error));
