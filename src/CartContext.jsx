import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const handleAddToCart = item => {
        setCart(prev => {
            if (prev.find(i => i.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const handleRemoveFromCart = item => {
        setCart(prev => prev.filter(i => i.id !== item.id));
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
