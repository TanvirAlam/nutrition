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
        this.validateAmount(baseValues);
        this.currentValues = { ...baseValues };
    }

    private validateAmount(baseValues: Nutritions) {
        if (baseValues.amount <= 0) {
            throw new InvalidFoodAmount(baseValues.amount);
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
        this.currentValues.amount = amount;
    }
}

export default Food;