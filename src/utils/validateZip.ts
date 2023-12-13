const validateZip = (zip: string): boolean => {
    const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    return zipRegex.test(zip);
  };
  
  export default validateZip;