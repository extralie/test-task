import { expect } from "chai";
import axios from "axios";

describe("Вывод данных конкретного юзера по id", () => {
    const url = "http://localhost/users/";

    it("Корректно выводит данные конкретного юзера", async () => {
        const id = (await axios.get(url)).data[0].id;
        const response = await axios.get(`${url}${id}`);

        expect(response.status).to.equal(200);
    });

    it("Возвращает ошибку, когда юзер не найден", async () => {
        await axios.post(`${url}0`, {})
            .catch(err => {
                expect(err.response.status).to.equal(404);
            });
    });
});