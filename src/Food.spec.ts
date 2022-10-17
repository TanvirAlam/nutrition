import EmptyFoodNameError from "./errors/EmptyFoodNameErros";
import InvalidFoodAmount from "./errors/InvalidFoodAmount";
import Food from "./Food";

import Units from './Units';

describe("Food", () => {
    test("create", () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };
        const food = new Food('rice', Units.GRAM, baseValues);

        expect(food).toBeDefined();
        expect(food.getName()).toEqual('rice');
        expect(food.getUnit()).toEqual('g');
        expect(food.getBaseValues().amount).toEqual(100);
        expect(food.getBaseValues().fat).toEqual(30);
        expect(food.getBaseValues().carbohydrate).toEqual(40);
        expect(food.getBaseValues().protein).toEqual(65);
        expect(food.getBaseValues().calories).toEqual(124);
        expect(food.getCurrentValues()).toEqual(food.getBaseValues());
    });

    test("create food with empty name", () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };

        expect(() => new Food('', Units.GRAM, baseValues)).toThrowError(EmptyFoodNameError);
    });

    test("create food with 0 amount", () => {
        const baseValues = {
            amount: 0,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };

        expect(() => new Food('rice', Units.GRAM, baseValues)).toThrowError(InvalidFoodAmount);

    });

    test('create food and change the amount', () => {
        const baseValues = {
            amount: 20,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };

        const food = new Food('rice', Units.GRAM, baseValues);

        food.changeAmount(23);

        expect(food.getCurrentValues().amount).toEqual(23);
    });

    test('create food with nagitive number', () => {
        const baseValues = {
            amount: 20,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };

        const food = new Food('rice', Units.GRAM, baseValues);
        expect(() => food.changeAmount(-23)).toThrowError(InvalidFoodAmount);
    });

    test('create food change amount and calculate the calories', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124
        };

        const food = new Food('rice', Units.GRAM, baseValues);
        food.changeAmount(87);
        expect(food.getCurrentValues().calories).toEqual(108);
    })
})