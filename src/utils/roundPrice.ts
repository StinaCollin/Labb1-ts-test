// roundPrice() tar ett pris och avrundar det uppåt till två decimaler. Den tar även emot en valuta och ett mönster som argument. Valutan används för att välja vilken valutasymbol som ska användas. Mönstret används för att välja var valutasymbolen ska placeras. Om mönstret är before så placeras valutasymbolen före priset, annars placeras den efter priset. Om inget mönster anges så placeras valutasymbolen efter priset.
const roundPrice = (price: number, currency: string = 'SEK', pattern: string = 'after'): string => {

    // Avrundar priset uppåt, till endast två decimaler
    const roundedPrice = Math.round(price * 100) / 100;
  
    // Välj valutasymbol beroende på valuta
    let currencySymbol: string;
    switch (currency) {
      case 'USD':
        currencySymbol = '$';
        break;
      case 'NOK':
        currencySymbol = 'kr';
        break;
      default:
        currencySymbol = 'SEK';
    }
  
    // Välj var valutasymbolen ska placeras baserat på mönstret
    const formattedPrice =
      pattern === 'before' ? `${currencySymbol} ${roundedPrice.toFixed(2)}` : `${roundedPrice.toFixed(2)} ${currencySymbol}`;
  
    return formattedPrice;
  };
  
  export default roundPrice;