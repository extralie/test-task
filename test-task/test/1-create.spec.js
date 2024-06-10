import { expect } from "chai";
import axios from "axios";

describe("Создание юзера", () => {
    const url = "http://localhost/users/";

    it("Успешно заносит юзера в дб", async () => {
        const response = await axios.post(url, {
            name: "Максим",
            email: "maxim@icloud.com",
            age: 16
        });

        expect(response.status).to.equal(200);
    });

    it("Возвращает ошибку при неверных входных данных", async () => {
        await axios.post(url, {})
            .catch(err => {
                expect(err.response.status).to.equal(400);
            });
    });
});