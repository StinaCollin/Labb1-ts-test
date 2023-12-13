// Uppgift: 2

import validateZip from './validateZip';

// returnerar true för giltigt postnummer, då det innehåller 5 siffror
describe('validateZip', () => {
  it('returnerar true för giltigt postnummer', () => {  
    expect(validateZip('12345')).toBe(true);
  });

    // returnerar false för ogiltigt postnummer med för få siffror, då det enbart innehåller 4 siffror
  it('returnerar false för ogiltigt postnummer med för få siffror', () => {
    expect(validateZip('1234')).toBe(false);
  });

  // returnerar false för ogiltigt postnummer med för många siffror, då det innehåller 6 siffror
  it('returnerar false för ogiltigt postnummer med för många siffror', () => {
    expect(validateZip('123456')).toBe(false);
  });

  // returnerar false för ogiltigt postnummer med icke-siffror, då det innehåller bokstäver
  it('returnerar false för ogiltigt postnummer med icke-siffror', () => {
    expect(validateZip('abcde')).toBe(false);
  });
});