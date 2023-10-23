"use client";
import { useState, useContext } from "react";
import Cookies from "js-cookie";
import SendButton from "../../_components/sendButton";
import { useRouter } from "next/navigation";
import styles from "../../style.module.css";
import { Roboto, Inter } from "next/font/google";
import AuthContext from "@/app/context/AuthContext";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Page() {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const {auth, handleAuth, setCookie, handleCookie} = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const req = await fetch(`${process.env.API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user: credentials }),
      });

      const responseText = await req.text(); 

      if (responseText.includes('{')) {
        let response = JSON.parse(responseText)

        setIsLoading(false);
        setError(null);

        handleCookie(response);
        
        router.push('/categorias')

      } else {
        setError(responseText)
        setIsLoading(false)
      }

    } catch (error) {
      setError("Email o Usuario incorrectos");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`${styles.welcomeMessage} col-12`}>
        <h4>Bienvenidas/os!</h4>
        <p className={roboto.className}>Por favor ingresa con tu cuenta</p>
      </div>

      <div className={`${styles.signLogin} col-12`}>

        <form className={`${roboto.className} ${styles.formContainer}`} onSubmit={handleLogin}>
          <label
            htmlFor="email"
            className={styles.labelCredentials}
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.inputCredentials}
            placeholder="nombre@ejemplo.com"
            onChange={(e) =>
              setCredentials({
                ...credentials,
                email: e.target.value,
              })
            }
            required
          />
          <label
            htmlFor="password"
            className={styles.labelCredentials}
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={styles.inputCredentials}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
            required
          />
          <p className={`text-center`}><Link className="colour-link" href="/ingreso/recover-password">¿Olvidaste tu contraseña?</Link></p>
          <div className={styles.divLoginButton}>
            <SendButton
              type={'submit'}
              // onClick={handleLogin}
              isLoading={isLoading}
              className={`${roboto.className} ${styles.loginButton} `} buttonText={'Ingresar'}
            />
          </div>
          <div className="text-center mt-2">
            {error && <p className="mt-4">{error}</p>}
          </div>
        </form>
      </div>
    </>
  );
}
