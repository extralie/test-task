import { expect } from "chai";
import axios from "axios";

describe("Обновление юзера", () => {
    const url = "http://localhost/users/";

    it("Корректно выводит данные обновленного юзера", async () => {
        const id = (await axios.get(url)).data[0].id;
        const response = await axios.put(`${url}${id}`, {
            name: "Максимка"
        });

        expect(response.data.name).to.equal("Максимка");
    });

    it("Выводит ошибку, когда юзер не найден", async () => {
        await axios.post(`${url}0`, {
            name: "Максимка"
        })
            .catch(err => {
                expect(err.response.status).to.equal(404);
            });
    });

    it("Выводит ошибку при неверных входных данных", async () => {
        const id = (await axios.get(url)).data[0].id;

        await axios.put(`${url}${id}`, {
            name: "Максимка".split("")
        })
            .catch(err => {
                expect(err.response.status).to.equal(400);
            });
    });
});