import { TestScheduler } from 'jest';
import SolarAge from './../src/solar-age.js';

describe('SolarAge', () => {

  test('should create new SolarAge class object with earth age property', () => {
    let output = new SolarAge(1);
    expect(output.earthAge).toEqual(1);
  });

    test('should create new SolarAge class object with jupiter age property', () => {
    let output = new SolarAge(12);
    expect(output.jupiterAge).toEqual(1);
  });    

      test('should create new SolarAge class object with all planet age properties', () => {
    let output = new SolarAge(100);
    expect(output.mercuryAge).toEqual(414);
    expect(output.venusAge).toEqual(162);
    expect(output.earthAge).toEqual(100);
    expect(output.marsAge).toEqual(53);
    expect(output.jupiterAge).toEqual(8);
    expect(output.saturnAge).toEqual(3);
    expect(output.uranusAge).toEqual(1);
    expect(output.neptuneAge).toEqual(0);    
  });           
});

// resuming work