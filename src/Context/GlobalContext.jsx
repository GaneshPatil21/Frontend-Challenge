import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        email: "",
        income: "",
        relationshipStatus: "",
        interests: [],
        formError: null,
    });

    const updateGlobalState = (key, value) => {
        setGlobalState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
