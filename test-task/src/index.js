import express from "express";
import dotenv from "dotenv";
import Router from "./Router.js";
import Database from "./Database.js";
dotenv.config(); // подключение .env файла

const app = express();
app.use(express.json());

const router = new Router(app);
await router.route(); // подключение маршрутов

await Database.connect(process.env.DB_URL);

app.listen(80, () => {
    console.log("Info | Веб-сервер запущен на порте 80");
});