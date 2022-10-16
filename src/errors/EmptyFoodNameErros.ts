export default class EmptyFoodNameError extends Error {
    constructor(message = 'Empty is not allowed') {
        super(message);
    }
}