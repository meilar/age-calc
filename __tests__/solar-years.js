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
  let x;
  
  beforeEach(() => {
    x = new SolarCitizen(100);
  });

  test("should create new SolarCitizen object", () => {
    expect(x).toBeDefined();
  }); 

  test("should contain a current age property", () => {
    expect(x.currentAge).toEqual(100);
  });

  test("should contain a SolarYears instance stored as a solarAge property", () => {
    expect(x.solarAge.jupiterYear).toEqual(8);
  });

  test("should contain an expected lifespan property", () => {
    expect(x.expectedYears).toEqual(80);
  });

  test("should contain an reachedLifespan boolean property", () => {
    expect(x.reachedLifespan).toEqual(false);
  });

  test("should contain a method to update boolean if at or over lifespan", () => {
    x.updateLifespanFlag();
    expect(x.reachedLifespan).toEqual(true);
  });

  test("should contain a delta from expected lifespan property", () => {
    expect(x.lifespanDelta.earthYear).toEqual(20);
  });

  test("should contain a delta from expected lifespan in solar ages property", () => {
    expect(x.lifespanDelta.mercuryYear).toEqual(82);
  });
});