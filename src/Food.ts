import EmptyFoodNameError from './errors/EmptyFoodNameErros';
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