import { useState, useContext, createContext, } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = (props) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        purchase: 0,
        genre: ""
    });

    const updateUser = (name, email) => {
        setUserData({ name, email })
    }
        ;
    const showName = () => {

        return "hi" + userData.name
    };

    return (
        <userContext.Provider value={{ userData, updateUser, showName }}>
            {props.children}
        </userContext.Provider>
    )

};