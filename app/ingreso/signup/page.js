"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google"
import styles from "../../style.module.css";
import SendButton from "@/app/_components/sendButton";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '700']
})

export default function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        sqlInterest: "",
        excelKnowledge: "",
        sqlKnowledge: "",
        englishAbility: "",
        country: "",
        discountInterest: "",
    });

    const [error, setError] = useState(null);

    const router = useRouter();

    const handleInputChange = (field, value) => {
        setCredentials({
          ...credentials,
          [field]: value,
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch(
                `${process.env.API_BASE_URL}/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ user: credentials }),
                }
            );

            const response = await res.json();

            if (response.success == true) {
                setIsLoading(false)
                router.push("/ingreso/signup/confirmation");
            } else {
                setError(response.errors)
                setIsLoading(false)
            }
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }

    };
    return (
        <>
            <div className={`${styles.welcomeMessage} col-12`}>
                <h4>Bienvenido!</h4>
                <p className={roboto.className}>
                    Ingresa tus datos para registrarte
                </p>
            </div>
            <div >

                <div className={`${styles.signLogin} col-12`}>
                    <form className={`${roboto.className} ${styles.formContainer}`} onSubmit={handleSubmit}>
                    <div>
                            <label
                                htmlFor="name"
                                className={styles.labelCredentials}>
                                Tu nombre
                            </label>
                            <input
                                name="name"
                                id="name"
                                className={styles.inputCredentials}
                                placeholder="Tu nombre"
                                required
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="last_name"
                                className={styles.labelCredentials}>
                                Tu apellido
                            </label>
                            <input
                                name="last_name"
                                id="last_name"
                                className={styles.inputCredentials}
                                placeholder="Tu apellido"
                                required
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        last_name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className={styles.labelCredentials}>
                                Tu correo electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={styles.inputCredentials}
                                placeholder="nombre@ejemplo.com"
                                required
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className={styles.labelCredentials}
                            >
                                Tu contraseña
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
                        <div className="py-2">
                            <label htmlFor="sqlInterest" className={`${styles.labelCredentials} d-block`}>
                                ¿Por qué quieres aprender o profundizar en SQL?
                            </label>
                            <select
                                id="sqlInterest"
                                name="sqlInterest"
                                className={`${styles.selectInput} d-block`}
                                onChange={(e) => handleInputChange("sqlInterest", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="backend">Me interesa ser desarrollador Backend o FullStack</option>
                                <option value="dataScience">Me interesa ser Analista de Datos o Data Scientist</option>
                                <option value="work">Me sirve o me puede servir dentro de mi trabajo</option>
                                <option value="evaluate">No me interesa particularmente SQL pero quiero aprender algo asociado a programación para evaluar si tengo las competencias para estudiar en una carrera o bootcamp</option>
                            </select>
                        </div>
                        <div className="py-2">

                            <label htmlFor="excelKnowledge" className={`${styles.labelCredentials} d-block`}>
                                ¿Tienes conocimientos previos de Excel?
                            </label>
                            <select
                                id="excelKnowledge"
                                name="excelKnowledge"
                                className={`${styles.selectInput} d-block`}

                                value={credentials.excelKnowledge}
                                onChange={(e) => handleInputChange("excelKnowledge", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="no">No</option>
                                <option value="basic">Puedo hacer operaciones como multiplicar valores en las distintas celdas</option>
                                <option value="intermediate">Puedo extraer información utilizando fórmulas o tablas pivote</option>
                            </select>
                        </div>
                        <div className="py-2">

                            <label htmlFor="sqlKnowledge" className={`${styles.labelCredentials} d-block`}>
                                ¿Cuáles son tus conocimientos previos de SQL?
                            </label>
                            <select
                                id="sqlKnowledge"
                                name="sqlKnowledge"
                                className={`${styles.selectInput} d-block`}

                                value={credentials.sqlKnowledge}
                                onChange={(e) => handleInputChange("sqlKnowledge", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="none">Nunca he trabajado con SQL</option>
                                <option value="basic">Puedo hacer consultas básicas o modificar un registro</option>
                                <option value="advanced">Puedo hacer consultas sobre múltiples tablas</option>
                            </select>

                        </div>
                        <div className="py-2">
                            <label htmlFor="englishAbility" className={`${styles.labelCredentials} d-block`}>
                                ¿Puedes leer documentación técnica en inglés?
                            </label>
                            <select
                                id="englishAbility"
                                name="englishAbility"
                                className={`${styles.selectInput} d-block`}

                                value={credentials.englishAbility}
                                onChange={(e) => handleInputChange("englishAbility", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="no">No</option>
                                <option value="translator">Sí, utilizando un traductor</option>
                                <option value="difficulty">Sí, pero con dificultad</option>
                                <option value="fluent">Puedo leer y escribir inglés técnico sin problemas</option>
                            </select>
                        </div>
                        <div className="py-2">

                            <label htmlFor="country" className={`${styles.labelCredentials} d-block`}>
                                ¿En qué país te encuentras?
                            </label>
                            <select
                                id="country"
                                name="country"
                                className={`${styles.selectInput} d-block`}

                                value={credentials.country}
                                onChange={(e) => handleInputChange("country", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="mexico">México</option>
                                <option value="usa">Estados Unidos</option>
                                <option value="spain">España</option>
                                <option value="argentina">Argentina</option>
                                <option value="colombia">Colombia</option>
                                <option value="peru">Perú</option>
                                <option value="chile">Chile</option>
                                <option value="ecuador">Ecuador</option>
                                <option value="venezuela">Venezuela</option>
                                <option value="guatemala">Guatemala</option>
                                <option value="cuba">Cuba</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="republica-dominicana">Republica Dominicana</option>
                                <option value="honduras">Honduras</option>
                                <option value="paraguay">Paraguay</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="py-2">

                            <label htmlFor="discountInterest" className={`${styles.labelCredentials} d-block`}>
                                ¿Te gustaría recibir un descuento especial en nuestros cursos?
                            </label>
                            <select
                                id="discountInterest"
                                name="discountInterest"
                                className={`${styles.selectInput} d-block`}
                                value={credentials.discountInterest}
                                onChange={(e) => handleInputChange("discountInterest", e.target.value)}
                                required
                            >
                                <option value="" >Escoja una opción</option>
                                <option value="yes">Sí</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className={styles.divLoginButton}>
                            <SendButton
                                type="submit"
                                isLoading={isLoading}
                                className={`${roboto.className} ${styles.loginButton} `} buttonText={'Registrarse'}
                            >
                            </SendButton>
                        </div>
                        <div className="text-center mt-4">
                            {error || undefined ? <pre>{(error || "").toString()}</pre> : ""}
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

