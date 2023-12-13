const makeHeading = (text: string, level: number): string => {
    if (level < 1 || level > 6) {
      throw new Error('Rubriknivån måste vara mellan 1 och 6');
    }
  
    return `<h${level}>${text}</h${level}>`;
  };
  
  export default makeHeading;