import React, { createContext, useReducer } from "react";
import CartReducer, { initialState } from "./CartReducer";
export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
