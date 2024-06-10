import { create, deleteUser, getAll, getUser, update } from "./api.js";
import swagger from "./docs/swagger.json" assert { type: "json" };
import swaggerUi from "swagger-ui-express";

/**
 * @class Маршрутизатор
 */
class Router {
    /**
     * @param { import("express").Express } app
     */
    constructor(app) {
        this.app = app;
    }

    /**
     * Запуск маршрутизатора
     */
    async route() {
        this.app.post("/users", create); // подключение создания юзера
        this.app.get("/users", getAll); // подключение получения всех юзеров
        this.app.get("/users/:id", getUser); // подключение получения конкретного юзера
        this.app.put("/users/:id", update); // обновление юзера
        this.app.delete("/users/:id", deleteUser); // удаление юзера

        this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger, {
            customCss: ".swagger-ui .topbar { display: none }"
        })); // подключение страницы документации

        this.app.use("*", (_, res) => {
            res.status(404).json({
                text: "Не найдено"
            });
        });
    }
}

export default Router;