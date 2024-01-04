import Link from "next/link";
import { Roboto } from "next/font/google";
import SendButton from "../_components/sendButton";
import style from "./styles.module.css"
import HomeCard from "../_components/home-card";
import Footer from "../Footer";
import Image from "next/image";
import Testimonios from "../_components/testimonio-home";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});

const ex_fetch = [
  { "lenguage": "sql", "url": "/images/carts_images/CardSQLMobile.png" },
  { "lenguage": "javascript", "url": "/images/carts_images/CardJSMobile.png" },
  { "lenguage": "html", "url": "/images/carts_images/CardHTMHome.png" },
  { "lenguage": "css", "url": "/images/carts_images/CardCSShome.png" },
  { "lenguage": "python", "url": "/images/carts_images/CardPython Home.png" }
]

export default function Page() {

  return (
    <>
      <main className={style.home_content}>
        <section className={`${style.intro} ${style.welcome_to_int}`}>
          <div>
            <h1 className={`${style.title_text}`}>
              ¡Tu puerta de entrada al mundo del Análisis de Datos y Desarrollo Web!
            </h1>
            <p className={`${style.text} ${roboto.className}`}>
              ¿Te interesa el Análisis de Datos? ¿Estás adentrándote
              en el fascinante mundo del Data Science? ¿O tal vez estás
              buscando fortalecer tus habilidades para proyectos FullStack?
              Independientemente de tu objetivo, el dominio de SQL es crucial
              en el mundo tecnológico actual.
            </p>
            <div className={style.buttons_container}>
              <Link href={"/ingreso/signup"}>
                <SendButton
                  className={`${roboto.className} ${style.buttons}`}
                  buttonText={'Registrate'}>
                </SendButton>
              </Link>
              <Link href={"/ingreso/login"}>
                <SendButton
                  className={`${roboto.className} ${style.buttons} ${style.button_login}`}
                  buttonText={'Empieza Ahora'}>
                </SendButton>
              </Link>
            </div>
          </div>
          <div>
            <Image className={style.welcome_img} src="/images/img_welcome.png" width={400} height={419} alt="welcome"></Image>
          </div>
        </section>
        <section className={style.lenguage_carts}>
          {ex_fetch.map((e, index) => {
            return (
              <HomeCard
                key={"cart_home" + index}
                url_img={e.url}
              ></HomeCard>
            )
          }
          )}
          <HomeCard
            url_img={"/images/carts_images/ProximoLenguajeHome.png"}
          >
          </HomeCard>
        </section>

        <section className={`${style.intro} ${style.home_survey}`}>
          <h1 className={`${style.title_survey} ${style.frase}`}>
            &quot;¡Regístrate y participa en nuestra encuesta para elegir el próximo curso a publicar! ¿Python o TypeScript?
            Aprende con nosotros y contribuye a lanzar el próximo curso.&quot;
          </h1>
        </section>

        <section className={style.section_witness}>
          <h1 className={style.title_survey}>
            Testimonios
          </h1>
          <div className={style.testimonios_content}>
            <Testimonios
            src_perfil="/images/testimonios/950fb9a18d5dec232e6d5a05b9cb6d12.jpeg"
            src_test="/images/testimonios/f466da486810bf7fdffc7e731a7f8552.png"
            ></Testimonios>
            <Testimonios
            src_perfil="/images/testimonios/950fb9a18d5dec232e6d5a05b9cb6d12.jpeg"
            src_test="/images/testimonios/f466da486810bf7fdffc7e731a7f8552.png"
            ></Testimonios>
            <Testimonios
            src_perfil="/images/testimonios/950fb9a18d5dec232e6d5a05b9cb6d12.jpeg"
            src_test="/images/testimonios/f466da486810bf7fdffc7e731a7f8552.png"
            ></Testimonios>
          </div>
        </section>

        <div className={`${style.botSection} col-12`}>
          <Footer />
        </div>
      </main>
    </>

  )
}