import { createContext, useReducer } from 'react';
import reducer from './../store/reducer';

export const SelectedContext = createContext(null);
export const SelectedDispatchContext = createContext(null);

export function SelectedProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, { x: 0, y: 0, index: 0})

  return (
    <SelectedContext.Provider value={state}>
      <SelectedDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedDispatchContext.Provider>
    </SelectedContext.Provider>
  );
}