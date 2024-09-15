import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { assets } from "../assets/assets";
export const AppContext = createContext(null);



const AppContextProvider = (props) => {

    const url = "http://localhost:3000";
    const [token, setToken] = useState("");
    const [petsParaAdocao, setPetsParaAdocao] = useState([])

    const fetchPetList = async () => {
        const response = await axios.get(url + "/pet/list");
        setPetsParaAdocao(response.data.data)
    }
    useEffect(() => {
        async function carregaDados() {
            await fetchPetList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }

        }
        carregaDados();
    }, [])

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