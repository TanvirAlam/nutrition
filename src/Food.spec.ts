import Food from "./Food";

describe("Food", () => {
    test("create", () => {
        const food = new Food();
        expect(food).toBeDefined();
    })
})