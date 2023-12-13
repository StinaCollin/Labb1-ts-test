// Uppgift 6,  Primtal Skriv tester först och en funktion som testar om ett tal är ett primtal.

import isPrime from './isPrime';

describe('isPrime', () => {
  it('returnerar false för tal mindre än 2', () => {  // dessa är mindre än 2 och ska returnera false
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('returnerar true för primtal', () => {  // dessa är primtal och ska returnera true
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  it('returnerar false för icke-primtal', () => {   // dessa är icke-primtal och ska returnera false
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
  });

  it('returnerar false för negativa tal', () => {   // dessa är negativa tal och ska därmed returnera false
    expect(isPrime(-2)).toBe(false);
    expect(isPrime(-3)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });
});
