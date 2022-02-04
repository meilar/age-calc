import { TestScheduler } from 'jest';
import SolarAge from './../src/solar-age.js';

describe('SolarAge', () => {

  test('should create new SolarAge class object with earth age property', () => {
    let output = new SolarAge(1);
    expect(output.earthAge).toEqual(1);
  });       
});