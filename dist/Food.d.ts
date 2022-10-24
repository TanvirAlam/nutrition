import Nutritions from './Nutritions';
import Units from './Units';
declare class Food {
    private readonly name;
    private readonly unit;
    private readonly baseValues;
    private currentValues;
    constructor(name: string, unit: Units, baseValues: Nutritions);
    private validateAmount;
    private validateName;
    getName(): string;
    getUnit(): string;
    getBaseValues(): Nutritions;
    getCurrentValues(): Nutritions;
    changeAmount(amount: number): void;
    changeCalories(calories: number): void;
    changeFat(fat: number): void;
    changeProtein(protein: number): void;
    changeCarbohydrate(carbohydrate: number): void;
    private calculateAmountFromNutrition;
    calculateNutrients(nutrients: string[]): void;
    calculateNutritions(nutrition: string): number;
}
export default Food;
