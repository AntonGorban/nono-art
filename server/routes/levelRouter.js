const Router = require("express");
const router = new Router();
const LevelController = require("../controllers/LevelController");

router.post("/sharing", LevelController.sharing);

module.exports = router;
