const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/planets", controllers.getPlanets);
router.get("/planets/:id", controllers.findPlanet); 
router.post("/",middlewares.planetValidation,  controllers.createPlanet);

module.exports = router;
