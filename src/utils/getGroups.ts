

const getGroups = (): Promise<{ id: number; groupName: string }[]> => {
    return new Promise((resolve) => {
      
      setTimeout(() => {
        const groups = [
          { id: 1, groupName: "Hajarna" },
          { id: 2, groupName: "Valarna" },
          { id: 3, groupName: "Zebrorna" },
        ];
        resolve(groups); 
      }, 1000);
    });
  };
  
  export default getGroups;
  