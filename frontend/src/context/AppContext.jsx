import { createContext, useState } from "react";
import { petsParaAdocao } from "../assets/assets";

export const AppContext = createContext(null);



const AppContextProvider = (props) => {

    const url = "http://localhost:3000";
    const [token, setToken] = useState("");
    
    const contextValue = {
        petsParaAdocao,
        url,
        token,
        setToken
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;