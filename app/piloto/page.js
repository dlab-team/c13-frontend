import Script from "next/script";
import Image from "next/image";
import styles from "../style.module.css";
import Footer from "../Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

const Formulario = async () => {
  return (
    <>
      <Script src="https://embed.typeform.com/next/embed.js" async />

      <div
        data-tf-widget="I5nxiV4k"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Formulario de Perfilamiento de Usuarios"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ width: "100%", height: "500px", margin: "2em 0" }}
      ></div>
    </>
  );
};

export default function Page() {
  return (
    <>
      <div className="container">
        <div className={`${styles.base} row`}>
        <div className={`${styles.pilotSection} col-12`}>
            <div className="row">
              <div className={`${styles.welcomeText} col-12  `}>
                <div className="row">
                  <h1
                    className={`${styles.title} ${styles.tituloPiloto} col-12 text-center mb-3`}
                  >
                    ¡BIENVENIDO A NUESTRO POGRAMA PILOTO!
                  </h1>

                  <h3
                    className={`${roboto.className} ${styles.subtituloPiloto} col-12 text-center`}
                  >
                    Únete al pograma piloto de nuestra plataforma SQL
                    Interactiva, explora esta herramienta, aprende SQL a tu
                    ritmo, con ejercicios reales y crece con Desafío Latam.
                  </h3>

                  <h3
                    className={`${styles.subtitle} ${styles.subtituloVamos} col-12 mb-5 text-center`}
                  >
                    ¡VAMOS CON TODO!
                  </h3>
                </div>
              </div>

              <Formulario />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.botSection} col-12`}>
        <Footer />
      </div>
    </>
  );
}
