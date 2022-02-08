export class SolarYears {
  constructor(years) {
    this.earthDays = years*365;
    this.mercuryYear = parseInt(this.earthDays/88);
    this.venusYear = parseInt(this.earthDays/225);
    this.earthYear = parseInt(this.earthDays/365);
    this.marsYear = parseInt(this.earthDays/687);
    this.jupiterYear = parseInt(this.earthDays/4333);
  }
}

export class SolarHuman {
  constructor(age) {
    this.currentAge = age;
    this.solarAge = new SolarYears(age);
    this.expectedYears = 80;
    this.reachedLifespan = false;
    if (this.currentAge >= this.expectedYears) {
      this.lifespanDelta = new SolarYears (age - this.expectedYears);
    } else {
      this.lifespanDelta = new SolarYears (this.expectedYears - age);
    }
  }

  updateLifespanFlag () {
    if (this.currentAge >= this.expectedYears) {
      this.reachedLifespan = true;
    }
  }

  updateExpectedLifespan (newEstimate) {
    this.expectedYears = newEstimate;
    this.updateLifespanFlag;
    if (this.currentAge >= this.expectedYears) {
      this.lifespanDelta = new SolarYears (this.currentAge - this.expectedYears);
    } else {
      this.lifespanDelta = new SolarYears (this.expectedYears - this.currentAge);
    }
  }
}