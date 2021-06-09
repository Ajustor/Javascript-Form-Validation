export class Range {
    constructor({ min = null, max = null }) {
        this.min = min;
        this.max = max;
        this.response = {};
    }
    isValid(value) {
        if (isNaN(value)) {
            return false;
        }
        const onError = {
            min: this.min !== null ? value > this.min : true,
            max: this.max !== null ? value < this.max : true
        }
        return Object.values(onError).some((error) => !error) ? onError : true;

    }
}