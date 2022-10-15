import Food from "./Food";

describe("Food", () => {
    test("create", () => {
        const baseValues = {
            amount: 100
        };
        const food = new Food('rice', 'g', baseValues);

        expect(food).toBeDefined();
        expect(food.getName()).toEqual('rice');
        expect(food.getUnit()).toEqual('g');
        expect(food.getBaseValues().amount).toEqual(100);
    })
})