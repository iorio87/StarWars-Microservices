const { Router } = require("express");
const router = Router();

const store = require("../database");

router.get("/:model", async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

module.exports = router;
