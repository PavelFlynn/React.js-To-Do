import { createContext } from "react";

export const TodosContext = createContext();

// Use: Sets global useState const for components wrapped in the context component. e.g.: <TodosContext.Provider value={} > +...Components...+ <TodosContext />