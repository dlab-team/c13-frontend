'use client'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { usePathname } from 'next/navigation'


const { createContext } = require("react");

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const pathname = usePathname()
  const [auth, setAuth] = useState(false)

  const handleCookie = (response) => {
    if (!auth){
      Cookies.set("JWT-cookie", response.jwt, { expires: 7 })
    } else {
      Cookies.remove('JWT-cookie');
      window.location.reload();
    }
  }

  useEffect(() => {
    const initialCookie = Cookies.get("JWT-cookie")

    if (initialCookie) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [pathname]);


  
  
  const data = { auth, setAuth, handleCookie }

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}


export { AuthProvider };
export default AuthContext;