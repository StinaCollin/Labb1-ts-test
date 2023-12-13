
const isLowerCase = (input: string): boolean => {
    // Kolla om varje tecken i input är en lowercase-bokstav
    return /^[a-z]*$/.test(input); // Tillåt att strängen också är tom, fick fail på testet annars
  };
  
  export default isLowerCase;
  