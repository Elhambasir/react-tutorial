import { createContext } from 'react';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  return (
    <TodosContext.Provider value={'todos data'}>
      {children}
    </TodosContext.Provider>
  );
};
export { TodosContext };
