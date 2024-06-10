import { expect } from "chai";
import axios from "axios";

describe("Удаление юзера по id", () => {
    const url = "http://localhost/users/";

    it("Корректно удаляет юзера", async () => {
        const id = (await axios.get(url)).data[0].id;
        const response = await axios.delete(`${url}${id}`);

        expect(response.status).to.equal(200);
    });

    it("Выводит ошибку, когда юзер не найден", async () => {
        await axios.delete(`${url}0`)
            .catch(err => {
                expect(err.response.status).to.equal(404);
            });
    })
});