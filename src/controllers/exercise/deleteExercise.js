const mongoose = require("mongoose");
const Exercise = require("../../models/exercise");

const deleteExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "no exercise with that id" });
  }

  try {
    const exercise = await Exercise.findByIdAndDelete(id);

    if (!exercise) {
      return response.status(404).json({ message: "no exercise match" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ error: "no exercise found" });
  }
};

module.exports = {
  deleteExercise,
};
