"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidFoodAmount extends Error {
    constructor(amount) {
        super(`Invalid amount ${amount}. It must be a positive number`);
    }
}
exports.default = InvalidFoodAmount;
