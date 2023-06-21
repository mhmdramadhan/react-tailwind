import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

const portofolio = [
  {
    id: '1',
    name: 'Aplikasi 1',
  },
  {
    id: '2',
    name: 'Aplikasi 2',
  },
  {
    id: '3',
    name: 'Aplikasi 3',
  },
  {
    id: '4',
    name: 'Aplikasi 4',
  },
];

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <DataContext.Provider value={{ portofolio, user }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
