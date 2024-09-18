import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { assets } from "../assets/assets";
export const AppContext = createContext(null);



const AppContextProvider = (props) => {

    const url = "http://localhost:3000";
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [petsParaAdocao, setPetsParaAdocao] = useState([])

    const fetchPetList = async () => {
        const response = await axios.get(url + "/pet/list");
        setPetsParaAdocao(response.data.data)
    }
    const fetchUser = async (token) => {
        const response = await axios.get(url + "/user/data",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUser(response.data.data)
    }
    useEffect(() => {
        async function carregaDados() {
            await fetchPetList();
            const token =  localStorage.getItem("token")
            if (token) {
                setToken(token);
                fetchUser(token);
            }

        }
        carregaDados();
    }, [token])

    const contextValue = {
        petsParaAdocao,
        url,
        token,
        setToken,
        user
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;