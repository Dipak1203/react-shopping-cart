import React, { createContext } from "react";
import ContextCart from "./ContextCart";

import products from "./Products";


export const cartContext = createContext();

const Cart = () => {
    return (
        <cartContext.Provider value={products}>
            <ContextCart />
        </cartContext.Provider>
    )
}

export default Cart