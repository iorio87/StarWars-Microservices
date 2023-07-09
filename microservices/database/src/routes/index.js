const { Router } = require("express");
const router = Router();
const store = require("../database");
const { validateModel } = require("../middlewares");

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = req.body
  await store[model].insert(response);
  res.status(200).json({msg:`${model} creado correctamente!`, response});
});


module.exports = router;
