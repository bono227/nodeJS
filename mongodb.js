require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./src/routes/task");
const authRoutes = require("./src/routes/auth");
const exerciseRoutes = require("./src/routes/exercise");
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    method: "GET, HEAD, POST, PUT, PATCH, DELETE",
    optionsSuccessStatus: 204,
  })
);

app.get("/", (request, response) => {
  response.send("GET request received at '/' path. you did it number 2!");
});

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/exercises", exerciseRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    console.log("Connected to MongoDB"),
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    })
  )
  .catch((error) => console.error(error));
