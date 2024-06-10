import mongoose from "mongoose";
import User from "./User.js";

/**
 * @class Класс для работы с дб
 */
class Database {
    /**
     * Подключение к дб
     */
    static async connect(url) {
        await mongoose.connect(url)
            .then(() => console.log("Info | Mongo DB подключено"))
            .catch(console.error);
    }

    /**
     * Создание нового юзера
     * @param { Promise<Object> } data Данные юзера
     * @returns Созданный юзер
     */
    static async createUser(data) {
        return await new User(data).save();
    }

    /**
     * Получение всех юзеров
     * @returns Все юзеры из коллекции
     */
    static async getAllUsers() {
        return await User.find();
    }

    /**
     * Получение юзера по айди
     * @param { string } id Айди искомого юзера
     */
    static async getUser(id) {
        return await User.findOne({id});
    }

    /**
     * Обновление пользовательских данных
     * @param { string } id Айди искомого юзера
     * @param { Object } props Данные для обновления
     * @returns Обновленный юзер
     */
    static async updateUser(id, props) {
        props.id = id; // в случае если указан новый айди

        return await User.findOneAndUpdate({ id }, { $set: props }, { new: true });
    }

    /**
     * Удаление юзера по айди
     * @param { string } id Айди искомого юзера
     * @returns { Promise<Boolean> } Успех операции
     */
    static async deleteUser(id) {
        return Boolean((await User.deleteOne({id})).deletedCount);
    }
}

export default Database;