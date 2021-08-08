const ApiError = require("../error/ApiError");
const path = require("path");
const fs = require("fs-extra");

class LevelController {
  async sharing(req, res, next) {
    try {
      const { name = null, colors = null, art = null } = req.body;

      if (!name) {
        return next(ApiError.badRequest("необходимо название уровня"));
      } else if (typeof name !== "string") {
        return next(ApiError.badRequest("название уровня должно быть строкой"));
      } else if (name.length < 3) {
        return next(
          ApiError.badRequest(
            "название уровня должно не должно быть короче 3 символов"
          )
        );
      } else if (name.length > 25) {
        return next(
          ApiError.badRequest(
            "название уровня должно не быть блиннее 25 символов"
          )
        );
      } else if (/[^\wа-яё\s\d\-]/gim.test(name)) {
        return next(
          ApiError.badRequest(
            "некорректное название уровня, допускаются буквы, цифры, пробелы и тире"
          )
        );
      } else if (!colors) {
        return next(ApiError.badRequest("необходим набор цветов"));
      } else if (typeof colors !== "object") {
        return next(ApiError.badRequest("набор цветов должен быть массивом"));
      } else if (!Array.isArray(colors)) {
        return next(ApiError.badRequest("набор цветов должен быть массивом"));
      } else if (colors.length !== 3) {
        return next(ApiError.badRequest("должно быть три цвета"));
      } else if (
        colors.filter((color) => !/^#(?:[0-9a-f]{3}){1,2}$/gi.test(color))
          .length > 0
      ) {
        return next(ApiError.badRequest("невалидный набор цветов"));
      } else if (!art) {
        return next(ApiError.badRequest("необходим уровень"));
      } else if (typeof art !== "object") {
        return next(ApiError.badRequest("уровень должен быть массивом"));
      } else if (!Array.isArray(art)) {
        return next(ApiError.badRequest("уровень должен быть массивом"));
      } else if (art.filter((row) => !Array.isArray(row)).length > 0) {
        return next(
          ApiError.badRequest("уровень должен быть массивом массивом")
        );
      } else if (
        art.filter(
          (row) =>
            row.filter((col) => ![0, 1, 2, null].includes(col)).length > 0
        ).length > 0
      ) {
        return next(ApiError.badRequest("невалидные значения в уровне"));
      } else if (art.filter((row) => row.length !== art[0].length).length > 0) {
        return next(
          ApiError.badRequest(
            "количество колонок в уровне должно быть одинаковым"
          )
        );
      } else if (art.length < 3) {
        return next(
          ApiError.badRequest(
            "количество строк в уровне не должно быть меньше 3"
          )
        );
      } else if (art.length > 25) {
        return next(
          ApiError.badRequest(
            "количество строк в уровне не должно быть больше 25"
          )
        );
      } else if (art[0].length < 3) {
        return next(
          ApiError.badRequest(
            "количество колонок в уровне не должно быть меньше 3"
          )
        );
      } else if (art[0].length > 20) {
        return next(
          ApiError.badRequest(
            "количество колонок в уровне не должно быть больше 20"
          )
        );
      }

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
