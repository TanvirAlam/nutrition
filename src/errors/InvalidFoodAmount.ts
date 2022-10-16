export default class InvalidFoodAmount extends Error {
    constructor(amount: number) {
        super(`Invalid amount ${amount}. It must be a positive number`);
    }
}