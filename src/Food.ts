import EmptyFoodNameError from './errors/EmptyFoodNameErros';
import InvalidFoodAmount from './errors/InvalidFoodAmount';
import Nutritions from './Nutritions'

class Food {
    constructor(
        private readonly name: string,
        private readonly unit: string,
        private readonly baseValues: Nutritions
    ) {
        if (name.length === 0) {
            throw new EmptyFoodNameError();
        }

        if (baseValues.amount <= 0) {
            throw new InvalidFoodAmount(baseValues.amount);
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
}

export default Food;