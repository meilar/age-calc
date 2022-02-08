export default class SolarYears {
  constructor(age) {
    this.earthDays = age*365;
    this.mercuryYear = parseInt(this.earthDays/88);
    this.venusYear = parseInt(this.earthDays/225);
    this.earthYear = parseInt(this.earthDays/365);
    this.marsYear = parseInt(this.earthDays/687);
    this.jupiterYear = parseInt(this.earthDays/4333);
  }
}

