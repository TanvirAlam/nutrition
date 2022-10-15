import Food from "./Food";

describe("Food", () => {
    test("create", () => {
        const food = new Food('rice', 'g');

        expect(food).toBeDefined();
        expect(food.getName()).toEqual('rice');
        expect(food.getUnit()).toEqual('g')
    })
})