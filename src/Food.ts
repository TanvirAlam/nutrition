class Food {
    constructor(
        private readonly name: string,
        private readonly unit: string,
    ) {

    }

    getName(): string {
        return this.name;
    }

    getUnit(): string {
        return this.unit;
    }
}

export default Food;