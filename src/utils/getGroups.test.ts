// 9b, Skriv ett test och skapa funktionen getGroups som i en promise returnerar:

import getGroups from './getGroups';

describe('getGroups', () => {
  it('returnerar en array av grupper', async () => { // returnerar först en array av grupper
    const groups = await getGroups();

    // Kontrollera seddan att det returnerade värdet är en array
    expect(Array.isArray(groups)).toBe(true);

    // Kontrollera också att varje grupp har ett id samt en groupName
    groups.forEach((group) => {
      expect(group).toHaveProperty('id');
      expect(group).toHaveProperty('groupName');
    });
  });

  it('returnerar grupper med korrekt id och groupName', async () => {
    const groups = await getGroups();

    // Kontrollera att id och groupName matchar för varje grupp
    expect(groups).toEqual([
      { id: 1, groupName: "Hajarna" },
      { id: 2, groupName: "Valarna" },
      { id: 3, groupName: "Zebrorna" },
    ]);
  });
});
