export default class SolarAge {
  constructor(age) {
    this.earthDays = age*365
    this.earthAge = parseInt(this.earthDays/365);
  }
}