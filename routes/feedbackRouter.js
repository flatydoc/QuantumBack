"use strict";
let express = require("express");
let router = express.Router();

let Policy = require("cors");
let feedbackController = require("../controllers/feedbackController");

router.post("/send", Policy(), async function (req, res, next) {
  let data = await new feedbackController().send(req.body);
  res.json(data);
});

module.exports = router;
