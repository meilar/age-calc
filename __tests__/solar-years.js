import { TestScheduler } from 'jest';
import {SolarYears, SolarHuman } from '../src/solar-years.js';


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

describe('SolarHuman', () => {
  let x;
  
  beforeEach(() => {
    x = new SolarHuman(100);
  });

  test("should create new SolarHuman object", () => {
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

  test("should contain a method to update expected lifespan and associated properties", () => {
    x.updateExpectedLifespan(90);
    expect(x.lifespanDelta.earthYear).toEqual(10);
  });

  test("should handle the case of an updated expected lifespan greater than current age", () => {
    x.updateExpectedLifespan(110);
    expect(x.lifespanDelta.earthYear).toEqual(10);
  });

  test("should handle the case of a newly constructed object with a current age less than default expected lifespan", () => {
    let x = new SolarHuman(20)
    expect(x.lifespanDelta.earthYear).toEqual(60);
  });

});