const { signUp, signIn } = require("../controllers/auth");
const express = require("express");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
