import Link from "next/link";
import { Roboto } from "next/font/google";
import SendButton from "../_components/sendButton";
import style from "./styles.module.css"
import HomeCard from "../_components/home-card";
import Footer from "../Footer";
import Image from "next/image";

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
        <section className={style.intro}>
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
      </main>

      <main className={style.home_survey}>
        <section className={style.intro}>
          <h1 className={style.title_survey}>
            Resultado de encuestas o informaciones varias
          </h1>
        </section>
      </main>

      <main className={style.home_witness}>
        <section className={style.intro}>
          <h1 className={style.title_survey}>
            Testimonios
          </h1>
        </section>

        <section className={style.section_witness}>
          <div className={style.image_witness}>

          </div>
          <p className={style.witness_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta lacus ante, at congue eros mattis eget.
            Maecenas vitae ultricies nisi.
          </p>
        </section>

        <section className={style.section_witness}>
          <div className={style.image_witness}>

          </div>
          <p className={style.witness_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta lacus ante, at congue eros mattis eget.
            Maecenas vitae ultricies nisi.
          </p>
        </section>

        <section className={style.section_witness}>
          <div className={style.image_witness}>

          </div>
          <p className={style.witness_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta lacus ante, at congue eros mattis eget.
            Maecenas vitae ultricies nisi.
          </p>
        </section>


      </main>

      <div className={`${style.botSection} col-12`}>
        <Footer />
      </div>

    </>

  )
}