// Uppgift 9 a ) Skriv ett test och skapa funktionen getUsers som i en promise returnerar: 
// 9b

import getUsers from './getUsers';

describe('getUsers', () => {
  it('returnerar en array av användare', async () => {
    const users = await getUsers();

    // Kontrollera först att det returnerade värdet är en array
    expect(Array.isArray(users)).toBe(true);

    // Kontrollera sedan att varje användare har ett namn och en grupp
    users.forEach((user) => {
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('group');
    });
  });

  it('returnerar användare med korrekt namn och grupp', async () => {
    const users = await getUsers();

    // Kontrollera sedan att namn och grupp matchar för varje användare
    expect(users).toEqual([
      { name: "Erik", group: 1 },
      { name: "Lisa", group: 2 },
      { name: "Hampus", group: 2 },
      { name: "Linda", group: 3 },
      { name: "Eva", group: 1 },
      { name: "Anna", group: 3 },
    ]);
  });
});
