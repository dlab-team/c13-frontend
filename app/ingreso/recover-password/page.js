"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import SendButton from "../../_components/sendButton";
import { useRouter } from "next/navigation";
import styles from "../../style.module.css";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Page() {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  const handleRecover = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const req = await fetch(`${process.env.API_BASE_URL}/password`, {
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
        router.push("recover-password/email");
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
        <h4>Recupera tu cuenta</h4>
      </div>

      <div className={`${styles.signLogin} col-12`}>
        <form className={`${roboto.className} ${styles.formContainer}`} onSubmit={handleRecover}>
        <p className="px-3">Ingresa tu correo y sigue las instrucciones quer serán enviadas</p>
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
          
          <div className={styles.divLoginButton}>
            <SendButton
              type={'submit'}
              // onClick={handleLogin}
              isLoading={isLoading}
              className={`${roboto.className} ${styles.loginButton} `} buttonText={'Enviar'}
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
