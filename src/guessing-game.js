class GuessingGame {
    constructor() {}
        this.min = null;
        this.max = null;
        this.ges = null;
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.ges = Math.round((this.min + this.max) / 2);
        return this.ges;
    }

    lower() {
this.max = this.ges;
    }

    greater() {
this.max = this.ges;
    }
}

module.exports = GuessingGame;
