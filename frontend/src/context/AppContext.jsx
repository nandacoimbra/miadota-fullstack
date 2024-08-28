import { createContext } from "react";
import { petsParaAdocao } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
    const contextValue = {
        petsParaAdocao
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;