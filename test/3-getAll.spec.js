import { expect } from "chai";
import axios from "axios";

describe("Вывод данных всех зарегестрированных юзеров", () => {
    const url = "http://localhost/users/";

    it("Корректно выводит данные всех юзеров", async () => {
        const response = await axios.get(url);

        expect(response.status).to.equal(200);
    });
});