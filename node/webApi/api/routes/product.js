const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "This is GET request from product",
  });
});

module.exports = router;
