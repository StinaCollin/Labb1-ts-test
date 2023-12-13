import validateEmail from './validateEmail';

// returnerar true för giltig e-postadress, då den innehåller både . och @
describe('validateEmail', () => {
  it('returnerar true för giltig e-postadress', () => {
    expect(validateEmail('jonatan@gmail.com')).toBe(true);
  });

  // returnerar false för ogiltig e-postadress, då den inte innehåller . 
  it('returnerar false för ogiltig e-postadress utan toppdomän', () => {
    expect(validateEmail('jonatan@gmail')).toBe(false);
  });

    // returnerar false för ogiltig e-postadress, då den inte innehåller @
  it('returnerar false för ogiltig e-postadress utan "@"-symbol', () => {
    expect(validateEmail('jonatan.com')).toBe(false);
  });
});