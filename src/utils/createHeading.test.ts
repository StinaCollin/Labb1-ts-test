// Uppgift: 3, skapa en heading, lade även till en throw error för ogiltig header storlek

import createHeading from './createHeading';

// skapar en HTML-rubrik av header storlek 1
describe('makeHeading', () => {
  it('skapar en HTML-rubrik av header storlek 1', () => {
    const result = createHeading('Hello', 1);
    expect(result).toBe('<h1>Hello</h1>');
  });

// skapar en HTML-rubrik av header storlek 2
  it('skapar en HTML-rubrik av nästa header storlek 2', () => {
    const result = createHeading('Next size', 2);
    expect(result).toBe('<h2>Next size</h2>');
  });

  // throw error, för ogiltig header storlek för tex 0 eller 7, 7 i detta fallet
  it('throw error, för ogiltig header storlek 7', () => {
    expect(() => createHeading('Test', 7)).toThrowError('Rubriknivån måste vara mellan 1 och 6');
  });
});