import EmptyFoodNameError from './errors/EmptyFoodNameErros';
import InvalidFoodAmount from './errors/InvalidFoodAmount';
import Nutritions from './Nutritions'

class Food {
    private currentValues: Nutritions;

    constructor(
        private readonly name: string,
        private readonly unit: string,
        private readonly baseValues: Nutritions
    ) {
        this.validateName(name);
        this.validateAmount(baseValues.amount);
        this.currentValues = { ...baseValues };
    }

    private validateAmount(amount: number) {
        if (amount <= 0) {
            throw new InvalidFoodAmount(amount);
        }
    }

    private validateName(name: string) {
        if (name.length === 0) {
            throw new EmptyFoodNameError();
        }
    }

    getName(): string {
        return this.name;
    }

    getUnit(): string {
        return this.unit;
    }

    getBaseValues(): Nutritions {
        return this.baseValues;
    }

    getCurrentValues(): Nutritions {
        return this.currentValues;
    }

    changeAmount(amount: number) {
        this.validateAmount(amount);
        this.currentValues.amount = amount;
        this.currentValues.calories = this.calculateCalories(amount);
    }

    calculateCalories(amount: number) {
        return Math.ceil(
            this.currentValues.amount * this.baseValues.calories / this.baseValues.amount
        );
    }
}

export default Food;