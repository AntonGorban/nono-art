const Router = require("express");
const router = new Router();
const levelRouter = require("./levelRouter");

router.use("/level", levelRouter);

module.exports = router;
