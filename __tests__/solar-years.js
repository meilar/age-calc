import { TestScheduler } from 'jest';
import {SolarYears, SolarCitizen } from '../src/solar-years.js';


describe('SolarYears', () => {

  test('should create new SolarYears class object with earth year property', () => {
    let output = new SolarYears(1);
    expect(output.earthYear).toEqual(1);
  });

    test('should create new SolarYears class object with jupiter year property', () => {
    let output = new SolarYears(12);
    expect(output.jupiterYear).toEqual(1);
  });    

      test('should create new SolarYears class object with all planet year properties', () => {
    let output = new SolarYears(100);
    expect(output.mercuryYear).toEqual(414);
    expect(output.venusYear).toEqual(162);
    expect(output.earthYear).toEqual(100);
    expect(output.marsYear).toEqual(53);
    expect(output.jupiterYear).toEqual(8); 
  });           
});

describe('SolarCitizen', () => {

  test("should create new SolarCitizen object", () => {
    let testObject = new SolarCitizen();
    expect(testObject).toBeDefined();
  }); 

  test("should contain a current age property", () => {
    let x = new SolarCitizen(10);
    expect(x.currentAge).toEqual(10);
  });

  test("should contain a SolarYears instance stored as a solarAge property", () => {
    let x = new SolarCitizen(100);
    expect(x.solarAge.jupiterYear).toEqual(8);
  });
});