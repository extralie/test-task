import Database from "./Database.js";

export const create = async (req, res) => {
    await Database.createUser(req.body)
        .then(user => res.json(user))
        .catch(() => res.status(400).json({
            text: "Неверные входные данные"
        }));
}

export const getUser = async (req, res) => {
    const user = await Database.getUser(req.params.id);

    res.status(user ? 200 : 404).json(user || {
        text: "Пользователь не найден"
    });
}

export const getAll = async (_, res) => {
    const users = await Database.getAllUsers();

    res.json(users);
}

export const update = async (req, res) => {
    await Database.updateUser(req.params.id, req.body)
        .then(user => res.status(user ? 200 : 404).json(user || {
            text: "Пользователь не найден"
        }))
        .catch(() => res.status(400).json({
            text: "Неверные входные данные"
        }));
}

export const deleteUser = async (req, res) => {
    const deleted = await Database.deleteUser(req.params.id);

    res.status(deleted ? 200 : 404).json({
        text: deleted
            ? "Пользователь успешно удален"
            : "Пользователь не найден"
    });
}