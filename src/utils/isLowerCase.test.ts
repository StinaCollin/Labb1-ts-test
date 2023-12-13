// Uppgift 5, Skriv funktionen isLowerCase(input: string) som returnerar true om input endast innehåller lowercase-bokstäver och false annars. Skriv tester först!

import isLowerCase from './isLowerCase';

describe('isLowerCase', () => {
  it('returnerar true om input endast innehåller lowercase-bokstäver', () => {
    const result1 = isLowerCase('abcdef');
    expect(result1).toBe(true);

    const result2 = isLowerCase('abc123');
    expect(result2).toBe(false);

    const result3 = isLowerCase('');
    expect(result3).toBe(true);
  });

  it('returnerar false om input innehåller minst en uppercase-bokstav', () => {
    const result4 = isLowerCase('AbC');
    expect(result4).toBe(false);
  });

  it('returnerar false om input innehåller tecken som inte är bokstäver', () => {
    const result5 = isLowerCase('abc!def');
    expect(result5).toBe(false);
  });
});
