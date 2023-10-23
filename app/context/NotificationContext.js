'use client'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const { createContext } = require("react");

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(null)

    const handleAuth = () => {
      if (auth) {
        setAuth(null);
      } else {
        setAuth(true);
      }
    };
    
    const data = { auth, handleAuth }

    return (
        <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    )
}


export { AuthProvider };
export default AuthContext;