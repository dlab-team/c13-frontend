import Link from "next/link";
import { Roboto } from "next/font/google";
import SendButton from "../_components/sendButton";
import style from "./styles.module.css"
import HomeCard from "../_components/home-card";
import Footer from "../Footer";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});


const fetch_ex = {
  why: [
    {
      lenguaje: "SQL",
      content_modal: {}
    },
    {
      lenguaje: "JavaScript",
      content_modal: {}
    },
    {
      lenguaje: "Python",
      content_modal: {}
    },
  ]
}


export default function Page() {

  return (
    <>
      <main className={style.home_content}>
        <section className={style.intro}>
          <p className={style.text}>
            Sabias que la industria crece constantemente?
            por eso ponemos a tu disposicion cursos de alta
            demanda y competividad.
          </p>
        </section>
        <section className={style.whys}>
          {fetch_ex.why.map((e, index) => {
            return (
              <HomeCard
                key={index}
                title={e.lenguaje}
                content={e.content_modal}

              ></HomeCard>
            )
          }
          )}
          <HomeCard
            title="Y mas lenguajes"
            content={null}
            last={true}
          >  
          </HomeCard>
        </section>
        <section>
          <Link href={"/ingreso/signup"}>
            <SendButton
              className={`${roboto.className} ${style.buttons}`}
              buttonText={'Registrate y empieza a aprender'}>
            </SendButton>
          </Link>
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