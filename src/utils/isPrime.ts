// funktion som tar in ett tal och returnerar true om det är ett primtal, annars false
const isPrime = (num: number): boolean => {
    // Ett tal mindre än 2 är inte ett primtal, eftersom minsta primtalet är 2
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // Om numret är jämnt delbart, är det INTE ett primtal
      if (num % i === 0) {
        return false;
      }
    }
  
    // Om inga delare hittades ÄR numret ett primtal
    return true;
  };
  
  export default isPrime;
  