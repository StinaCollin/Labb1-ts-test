
const getGenitive = (name: string): string => {
    // Om namnet slutar med 's', lägg till apostrof och returnera
    if (name.endsWith('s')) {
      return name + "";
    }
  
    // Annars lägg till 's' och returnera
    return name + "s";
  };
  
  export default getGenitive;
  