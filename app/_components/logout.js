'use-client'
import Link from "next/link";
import Cookies from "js-cookie";
import { useState, useContext } from "react";
import AuthContext from "@/app/context/AuthContext";


export default function Logout() {
  const { handleCookie } = useContext(AuthContext);

  return (
    <div className="logout" >
      <Link onClick={handleCookie} href={"/"}>Cerrar sesión</Link>
    </div>
  );
};
