// Uppgift: 4a, avrundar priset uppåt till endast två decimaler och lägger till svensk valuta
// Uppgift: 4b, Utöka roundPrice så att den tar emot vilken valuta den skriver ut
// Uppgift: 4c, Utöka roundPrice så att den tar emot ett mönster som avgör var valutasymbolen ska placeras, tex 100 SEK eller USD 10

import roundPrice from './roundPrice';

// testar tre olika priser om det blir expected resultat eller inte
describe('roundPrice', () => {
  it('avrundar priset uppåt till två decimaler och lägger till svensk valuta', () => {
    const result1 = roundPrice(232.10542);
    expect(result1).toBe('232.11 SEK');

    const result2 = roundPrice(14);
    expect(result2).toBe('14.00 SEK');
  });

  it('kan ange valuta som argument och väljer rätt valutasymbol', () => {
    const result3 = roundPrice(1024.2048, 'USD');
    expect(result3).toBe('1024.20 $');

    const result4 = roundPrice(500, 'NOK');
    expect(result4).toBe('500.00 kr');
  });

  it('kan ange mönster för utskrift och väljer rätt placering för valutasymbolen', () => {
    const result5 = roundPrice(1024.2048, 'USD', 'before');
    expect(result5).toBe('$ 1024.20');

    const result6 = roundPrice(500, 'NOK', 'after');
    expect(result6).toBe('500.00 kr');
  });

});