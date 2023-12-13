
// Funktion som hämtar användare från en API
const getUsers = (): Promise<{ name: string; group: number }[]> => {
    return new Promise((resolve) => {
      
      setTimeout(() => {
        const users = [
          { name: "Erik", group: 1 },
          { name: "Lisa", group: 2 },
          { name: "Hampus", group: 2 },
          { name: "Linda", group: 3 },
          { name: "Eva", group: 1 },
          { name: "Anna", group: 3 },
        ];
        resolve(users);
      }, 1000);
    });
  };
  
  export default getUsers;
  