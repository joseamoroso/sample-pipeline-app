const express = require("express");
const devopsController = require("../controllers/devops.controller");

const router = express.Router();

router.post("/", (req, res) => {
  const result = devopsController.devopsGetMessage(req.body["to"]);
  if (result) {
    res.status(200).send({
        message: result,
    });
  }
  else
    res.status(400).send({
        message: "must include 'to' input",
    });
});

module.exports = router;
