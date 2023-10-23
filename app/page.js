import Script from "next/script";
import Image from "next/image";
import styles from "./style.module.css";
import Footer from "./Footer";
import { Roboto } from "next/font/google";
import SendButton from "./_components/sendButton";
import Link from "next/link";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});

export default async function Page() {
  return (
    <>
      <div className="container">
        <div className={`${styles.base} row`}>
          <div className={`${styles.welcomeSection} col-12`}>
            {/* <div className={styles.nav}>
              <Image
                height={63}
                width={175}
                src="/images/logo-academia-bla.png"
                alt="desafiolatam"
                priority={true}
                className={styles.logoDashboard}
              />
              <button className={styles.loginButtonTop}>INGRESA</button>
            </div> */}
            <div className="row">
              <div className={`${styles.welcomeText} col-12 col-lg-7 `}>
                <div className="row">
                  <h1 className={`${styles.title} col-12 order-lg-1`}>
                    ¡Tu puerta de entrada al mundo del Análisis de Datos y Desarrollo Web!
                  </h1>
                  <div className="col-12 d-block d-md-none">
                    <Image
                      height={520}
                      width={520}
                      src="/images/illustration-1.png"
                      alt="desafiolatam"
                      priority={true}
                      className={`${styles.imagenDashboard}`}
                    />
                  </div>
                  <div className={`${styles.divButtons} col-12 order-lg-3`}>
                    <Link href={"/ingreso/signup"}>
                      <SendButton className={`${roboto.className} ${styles.registerButton} `} buttonText={'REGISTRATE'}>
                      </SendButton>
                    </Link>
                    <Link href={"/ingreso/login"}>
                      <SendButton className={`${roboto.className} ${styles.loginButton} `} buttonText={'EMPIEZA AHORA'}>
                      </SendButton>
                    </Link>
                  </div>
                  <p
                    className={`${styles.subtitle} ${roboto.className} col-12 order-lg-2`}
                  >
                    ¿Te interesa el Análisis de Datos? ¿Estás adentrándote en el fascinante mundo del Data Science? ¿O tal vez estás buscando fortalecer tus habilidades para proyectos FullStack? Independientemente de tu objetivo, el dominio de SQL es crucial en el mundo tecnológico actual.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <Image
                  height={520}
                  width={520}
                  src="/images/illustration-1.png"
                  alt="desafiolatam"
                  priority={true}
                  className={`${styles.imagenDashboard2}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={`about`} id='aceleracion'>
        <div className={`container text-center`}>
          <div className={`titulo-por-que pb-5`}>
            <h2 className={`mb-5`}>¿Por qué estudiar SQL?</h2>
          </div>
          <div className={`row justify-content-center box-container `}>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>
              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp`}>
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-global.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Un lenguaje universal
                  </h3>
                  <p>La mayoría de las bases de datos de renombre, ya sean MySQL, PostgreSQL u Oracle, utilizan SQL. Esto es porque SQL es el lenguaje estándar para las bases de datos relacionales.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>

              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp green-card`}>
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-big-data.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Fundamental para aprender programación
                  </h3>
                  <p>SQL es una introducción accesible y valiosa que sienta las bases para futuros estudios en desarrollo web y ciencia de datos.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>

              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp`}>
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-elegante.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Elegancia y sencillez
                  </h3>
                  <p>Imagina un lenguaje que es intuitivo y claro, donde cada consulta se siente como si estuvieras charlando con la base de datos. Así es SQL. No es solo técnico, es artístico.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>

              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp`}>
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-versatil.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Versatilidad
                  </h3>
                  <p>SQL es ese compañero de equipo que todos quieren. Funciona según especificaciones estándar y puede interactuar con casi cualquier sistema de gestión de bases de datos.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>

              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp`}>
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-analisis-de-datos.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Gurú del Análisis
                  </h3>
                  <p>Las empresas confían en SQL para destilar datos en insights valiosos. Cada consulta puede desentrañar tendencias y patrones que impulsan decisiones críticas.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 col-sm-12 mb-5`}>

              <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp`} >
                <div className={`icon`}>
                  <picture>
                    <Image
                      height={50}
                      width={150}
                      src="/images/icon-integracion.webp"
                      alt="desafiolatam"
                      priority={true}
                      className={`text-center`}
                    />
                  </picture>
                </div>
                <div className={`pb-5 card-text`}>
                  <h3>
                    Integración impecable
                  </h3>
                  <p>Los desarrolladores adoran a SQL porque se entrelaza sin problemas con aplicaciones, fortaleciendo la persistencia y búsqueda de datos.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="mt-4 container">
        <div className="row">
          <div className="col-12 col-md-4 pagos-bottom-text d-flex">
            <Image
              height={100}
              width={100}
              src="/images/grupo-de-chat-verde.png"
              alt="desafiolatam"
              priority={true}
              className={`w-auto m-auto`}
              />
              <h3>Nosotros</h3>
          </div>
          <div className="texto-nosotros pt-3 text-left col-12 col-md-8 ">
            <div className=" row">
              <p className="dos ">Nuestro sitio web está diseñado para proporcionar una serie de ejercicios interactivos que te ayudarán a aprender SQL rápidamente y directamente en tu navegador.</p>
              <p className="tres ">Estamos emocionados de que hayas decidido aprender SQL con nosotros y esperamos que disfrutes de tu experiencia en nuestro sitio web.</p>
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