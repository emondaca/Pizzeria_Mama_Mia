import { createContext, useContext, useState } from "react";
import { TokenContext } from "./TokenContext";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const { setTokenPresente } = useContext(TokenContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("")


/* Login */
    const registerMe = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            password,
            }),
        });
        const data = await response.json();
        alert(data?.error || "Datos Ingresados Correctamente");
        localStorage.setItem("token", data.token);
        setTokenPresente((localStorage.getItem("token") != null) ? true : false)
    };

    /* Login */
    const getToken = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email,
            password,
            }),
        });
        const data = await response.json();
        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
        setTokenPresente((localStorage.getItem("token") != null) ? true : false)
    };


    const handleLogout = () => {
        localStorage.setItem("token", null);
        setTokenPresente((localStorage.getItem("token") != 'null') ? true : false);
        }
    
    const getProfile = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            })
        const data = await response.json();
        setUser(data);
        localStorage.setItem("user", data.email)
        };

        return (
        "hola"
        /*<div>
        {user ? (
        <p>Email: {user.email}</p>
        ) : (
        <p>Please login to view your profile.</p>
        )}
        </div>*/

        );
    };

    const [login, setlogin] = useState ();

    return (
        <UserContext.Provider value={{email, setEmail, password, setPassword, getToken, getProfile, handleLogout, registerMe, user}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;