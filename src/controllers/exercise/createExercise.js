const Exercise = require("../../models/exercise");

const createExercise = async (req, res) => {
  const { name, description, sets, reps, weight } = req.body;

  if (!name || !description || !sets || !reps || !weight) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const exercise = await Exercise.create({
      name,
      description,
      sets,
      reps,
      weight,
    });
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { createExercise };
