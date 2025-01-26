import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
    const [tokenPresente, setTokenPresente] = useState(false);

    return (
        <TokenContext.Provider value={{ tokenPresente, setTokenPresente }}>
            {children}
        </TokenContext.Provider>
    );
};

export default TokenProvider;