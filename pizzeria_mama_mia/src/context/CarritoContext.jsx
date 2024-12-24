import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const [pizzasCarro, setPizzasCarro] = useState([]);
    return (
        <CarritoContext.Provider value={{pizzasCarro, setPizzasCarro}}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;