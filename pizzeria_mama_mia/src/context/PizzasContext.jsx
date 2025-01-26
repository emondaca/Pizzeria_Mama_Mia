import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

     useEffect (() => {
        consultarApi();
      }, []);
    
      const consultarApi = async () => {
        const resp = await fetch('http://localhost:5000/api/pizzas');
        const data = await resp.json();
        setPizzas(data);
      };

    return (
        <PizzasContext.Provider value={{ pizzas, setPizzas }}>
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;