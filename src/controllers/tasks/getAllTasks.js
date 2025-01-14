const task = require("../../models/task");

const getAllTasks = async (request, response) => {
  try {
    const tasks = await task.find();

    response.status(200).json(tasks);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = { getAllTasks };
