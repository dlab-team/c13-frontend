import DataJson from "./data.json" assert {type: "json"}
import Image from "next/image"
import styles from '../../queAprenderas.module.css'
import styleButton from "@/app/style.module.css"
import Footer from "@/app/Footer"
import Link from "next/link"
import SendButton from "@/app/_components/sendButton"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
})

const icon_url = [
  "/images/icon-global.webp",
  "/images/icon-big-data.webp",
  "/images/icon-elegante.webp",
  "/images/icon-versatil.webp",
  "/images/icon-analisis-de-datos.webp",
  "/images/icon-integracion.webp"
]

const liStyles = {
  '--accent-color-1': '#729e2e',
  '--accent-color-2': '#e2a30b',
  '--accent-color-3': '#009ee3',
  '--accent-color-4': '#e9501d',
  '--accent-color-5': '#356753',
  '--accent-color-6': '#35313c',
}

const estilos = {
  marginTop: "50px"
}

const Section = {
  display: "flex",
  justifyContent: "center"
}

export default function Page({ params }) {
  let data
  DataJson.forEach(element => {
    if (element["lenguaje"].toLowerCase() === params.lenguage.toLowerCase()) {
      data = element
    }
  })

  return (
    <>
      {
        data ?
          <>
            <section >
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }} className={`titulo-por-que pb-5`}>
                <h2 style={{ color: "#000" }} className={`mb-5`}>¿Por qué estudiar {data["lenguaje"]}?</h2>
                <p className={styles.descripcion}>
                  {data["description"]}
                </p>
              </div>
            </section>

            <section style={estilos} className={`about`} id='aceleracion'>
              <div className={`container text-center`}>
                <div className={`titulo-por-que pb-5`}>
                  <h2 className={`mb-5`}>¿Por qué estudiar {data["lenguaje"]}?</h2>
                </div>
                <div className={`row justify-content-center box-container `}>
                  {
                    Object.entries(data["content"]).map(([k, v], index) =>
                    (<div key={`${data["lenguaje"]}-${index}`} className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>
                      <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp ${index === 1 ? "green-card" : ""}`}>
                        <div className={`icon`}>
                          <picture>
                            <Image
                              height={50}
                              width={150}
                              src={icon_url[index]}
                              alt="desafiolatam"
                              priority={true}
                              className={`text-center`}
                            />
                          </picture>
                        </div>
                        <div className={`pb-5 card-text`}>
                          <h3>
                            {k}
                          </h3>
                          {v}
                        </div>
                      </div>
                    </div>)
                    )
                  }
                </div>
              </div>
            </section>

            <section style={estilos} id='aceleracion' className={styles.queAprenderas}>
              <h1 className={`text-center pb-5`}>¿Qué aprenderás durante el tutorial?</h1>
              <ul>
                {
                  Object.entries(data["que_aprenderas"]).map(([k, v], index) => (
                    <li key={`${data["lenguaje"]}-queaprenderas-${index}`} style={{ '--accent-color': liStyles[`--accent-color-${index + 1}`] }}>
                      <div className={styles.date}>{k}</div>
                      <div className={`${styles.descr} mt-5`}>
                        {v}
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>

            <section style={Section}>
              <Link style={{ textDecoration: "none" }} href={"/ingreso/signup"}>
                <SendButton className={`${roboto.className} ${styleButton.registerButton} button`} buttonText={'REGISTRATE'}>
                </SendButton>
              </Link>
            </section>

            <Footer></Footer>
          </>
          : "No hay nada"
      }
    </>
  )
}