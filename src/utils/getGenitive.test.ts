// Uppgift 8. Genitiv Skriv tester först och en funktion som tar emot ett namn och returnerar genitivformen av namnet.

import getGenitive from './getGenitive';

describe('getGenitive', () => {
  it('returnerar genitivformen för namn som slutar med "s"', () => { // dessa namn slutar redan med 's' och ska därför enbart returnera sig själva
    expect(getGenitive('Marcus')).toBe("Marcus");
    expect(getGenitive('Claes')).toBe("Claes");
    expect(getGenitive('Hampus')).toBe("Hampus");
  });

  it('returnerar genitivformen för andra namn', () => { // dessa namn ska returnera sig själva + 's' på slutet
    expect(getGenitive('Anna')).toBe("Annas");
    expect(getGenitive('Johanna')).toBe("Johannas");
    expect(getGenitive('Kalle')).toBe("Kalles");
  });

  it('hanterar tomma strängar', () => { // hanterar tomma strängar
    expect(getGenitive('')).toBe("s");
  });
});
