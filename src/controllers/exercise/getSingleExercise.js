const mongoose = require("mongoose");
const Exercise = require("../../models/exercise");

const getSingleExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "no exercise with that id" });
  }

  try {
    const exercise = await Exercise.findById(id);

    if (!exercise) {
      return res.status(404).json({ message: "no exercise match" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ error: "no exercise found" });
  }
};

module.exports = {
  getSingleExercise,
};
