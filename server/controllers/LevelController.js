const ApiError = require("../error/ApiError");
const path = require("path");
const fs = require("fs-extra");

class LevelController {
  async sharing(req, res, next) {
    try {
      const { name = null, colors = null, art = null } = req.body;

      const level = {
        name,
        width: art[0].length,
        height: art.length,
        colors: colors.map((color) => color.toUpperCase()),
        art,
        progress: Array(art.length).fill(Array(art[0].length).fill(null)),
      };
      const outputFilePath = path.resolve(
        __dirname,
        "..",
        "levels",
        "shared",
        `${Date.now()}.json`
      );
      const date = new Date().toLocaleString("ru", {
        hour12: false,
        month: "long",
        day: "2-digit",
        weekday: "short",
        timezone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      try {
        await fs
          .outputJson(
            outputFilePath,
            { level, date, ip: req.ip },
            { spaces: 4 }
          )
          .then(() =>
            console.log(
              `${date}. Был добавлен новый уровень "${name}", по пути ${outputFilePath} [IP: ${req.ip}]`
            )
          );
      } catch (error) {
        console.error(error);
        return next(ApiError.internal("что-то пошло не так"));
      }

      return res.status(201).json({
        status: 201,
        message: "Спасибо, скоро мы рассмотрим ваш замечательный уровень",
      });
    } catch (error) {
      console.error(error);
      return next(ApiError.internal("непредвиденная ошибка сервера"));
    }
  }
}

module.exports = new LevelController();
