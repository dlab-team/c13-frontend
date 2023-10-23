"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google"
import styles from "@/app/style.module.css";
import SendButton from "@/app/_components/sendButton";
import Link from "next/link";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '700']
})

export default function SignUp(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        reset_password_token: props.searchParams.reset_password_token,
        password: "",
        password_confirmation: "",
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch(
                `${process.env.API_BASE_URL}/password`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ user: credentials }),
                }
            );

            const response = await res.json();

            if (response.message) {
                setMessage(response.message)
            } else {
                setError(response.errors)
            }
        } catch (error) {
            setError(error)
        }
    };
    return (
        <>
            <div className={`${styles.welcomeMessage} col-12`}>
                <h4 className="px-3"> Ingresa tu nueva contraseña</h4>
            </div>
            <div >
                <div className={`${styles.signLogin} col-12`}>
                    <form className={`${roboto.className} ${styles.formContainer}`} onSubmit={handleSubmit}>
                        <div>
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

                                required
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className={styles.labelCredentials}

                            >
                                Confirmar contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password2"
                                placeholder="••••••••"
                                className={styles.inputCredentials}

                                required
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        password_confirmation: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className={styles.divLoginButton}>
                            <SendButton
                                type="submit"
                                disabled={isLoading}
                                className={`${roboto.className} ${styles.loginButton} `} buttonText={'Cambiar password'}
                            >
                                {isLoading ? (
                                    <>
                                        {/* <Spinner aria-label="true" className="spinner" /> */}
                                        <span className="pl-3">Cambiando contraseña...</span>
                                    </>
                                ) : (
                                    "Crear Cuenta"
                                )}
                            </SendButton>
                        </div>
                        <div className="text-center mt-4">
                            {message || undefined ? <pre>{(message || "").toString()} <br></br> <Link className="colour-link" href="/ingreso/login">Ir a login</Link></pre> : ''}
                        </div>
                        <div className="text-center mt-4">
                            {error || undefined ? <pre>{(error || "").toString()}</pre> : ""}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

