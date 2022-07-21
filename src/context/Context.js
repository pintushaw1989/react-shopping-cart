import { createContext, useContext, useReducer } from "react";
import cartReducers, { products } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
    // create useReducer
    const [state, dispatch] = useReducer(cartReducers, {
        products: products,
        cart: []
    });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(CartContext);
}