export default class SolarAge {
  constructor(age) {
    this.earthDays = age*365;
    this.mercuryAge = parseInt(this.earthDays/88);
    this.venusAge = parseInt(this.earthDays/225);
    this.earthAge = parseInt(this.earthDays/365);
    this.marsAge = parseInt(this.earthDays/687);
    this.jupiterAge = parseInt(this.earthDays/4333);
    this.saturnAge = parseInt(this.earthDays/10759);
    this.uranusAge = parseInt(this.earthDays/30687);
    this.neptuneAge = parseInt(this.earthDays/60190);
  }
}