class GuessingGame {
  constructor() {
    this.min;
    this.max;

    this.randomNumber;

    this.guessfulNumber;

  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.randomNumber = (Math.ceil(this.min) + Math.floor(this.max)) / 2;

    this.guessfulNumber = Math.ceil(this.randomNumber);

    return this.guessfulNumber;
  }

  lower() {
    this.max = this.guessfulNumber;
  }

  greater() {
    this.min = this.guessfulNumber;
  }
}

module.exports = GuessingGame;
