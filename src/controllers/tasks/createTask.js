const Task = require("../../models/task");

const createTask = async (request, response) => {
  const { name, description, status } = request.body;

  if (!name || !description || !status) {
    return response.status(400).json({
      message: "Please provide name, description and status",
    });
  }

  try {
    const task = await Task.create({ name, description, status });

    response.status(201).json(task);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
module.exports = { createTask };
