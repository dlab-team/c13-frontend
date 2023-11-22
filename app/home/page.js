import Link from "next/link";
import { Roboto } from "next/font/google";
import SendButton from "../_components/sendButton";
import style from "./styles.module.css"
import HomeCard from "../_components/home-card";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});


const fetch_ex = {
  why: [
    {
      lenguaje: "SQL",
      card_img: "/images/Group_Card_js.png",
      card_description: "SQL es un lenguaje de programación diseñado para gestionar y manipular bases de datos.",
      content_modal: [
        "SQL es un lenguaje de programación diseñado para gestionar y manipular bases de datos. Aprender SQL es fundamental para cualquier persona que trabaje con datos, ya que proporciona las habilidades necesarias para extraer información valiosa de bases de datos y realizar consultas eficientes. Con SQL, puedes organizar, actualizar y recuperar datos de manera efectiva, lo que es esencial en el mundo actual centrado en los datos.",
        "La mayoría de las aplicaciones y sistemas de gestión de bases de datos utilizan SQL como lenguaje principal. Al aprender SQL, podrás interactuar con una amplia variedad de bases de datos, lo que te brinda versatilidad en tu carrera profesional. Además, SQL es un estándar de la industria, lo que significa que las habilidades adquiridas son transferibles entre diferentes plataformas y entornos de trabajo.",
        "SQL es fácil de aprender, pero poderoso en su aplicación. Con un conocimiento sólido de este lenguaje, podrás realizar consultas complejas, diseñar bases de datos eficientes y optimizar el rendimiento de las consultas. Estas habilidades son altamente valoradas en el mundo laboral y te abrirán puertas en roles relacionados con bases de datos y análisis de datos.",
        "Aprender SQL también te permite comprender mejor cómo funcionan las bases de datos, lo que es crucial para el desarrollo de aplicaciones y sistemas. Ya sea que estés trabajando como desarrollador, analista de datos o administrador de bases de datos, el conocimiento de SQL te proporciona una base sólida para optimizar el rendimiento y garantizar la integridad de los datos.",
        "En resumen, aprender SQL es esencial para cualquier persona interesada en trabajar con datos. Desde la gestión de bases de datos hasta el análisis de datos, SQL es una herramienta poderosa que te permitirá destacar en tu campo y contribuir de manera significativa al éxito de proyectos y empresas.",
        "Al adquirir habilidades en SQL, te conviertes en un profesional más completo y valioso en el ámbito de la tecnología. Con la creciente importancia de los datos en el mundo actual, el conocimiento de SQL se ha vuelto casi indispensable para aquellos que buscan carreras exitosas en áreas como el desarrollo de software, la analítica de datos y la gestión de bases de datos."
      ]
    },
    {
      lenguaje: "JavaScript",
      card_img: "/images/Group_Card_js.png",
      card_description: "JavaScript es un lenguaje de programacion interpretado, dialecto del standar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, debilmente tipado y dinamico",
      content_modal: [
        "JavaScript es un lenguaje de programación fundamental para el desarrollo web. Aprender JavaScript te permite crear páginas web dinámicas e interactivas. Es un lenguaje del lado del cliente que se ejecuta en el navegador, permitiéndote manipular el contenido de la página, responder a eventos y mejorar la experiencia del usuario de forma significativa.",
        "La mayoría de los navegadores web admiten JavaScript, lo que lo convierte en una herramienta universal para el desarrollo web. Con JavaScript, puedes crear efectos visuales, validar formularios, interactuar con el usuario y cargar contenido de manera asíncrona, todo en tiempo real. Estas capacidades son esenciales para el desarrollo moderno de sitios web.",
        "El ecosistema de desarrollo de JavaScript es vasto, con una gran cantidad de bibliotecas y frameworks como React, Angular y Vue.js que facilitan la creación de aplicaciones web complejas y escalables. Aprender JavaScript te brinda la base necesaria para trabajar con estas tecnologías y participar en proyectos de desarrollo web de alto nivel.",
        "JavaScript también se ha expandido más allá del navegador gracias a entornos de ejecución como Node.js. Esto significa que puedes utilizar JavaScript para desarrollar aplicaciones del lado del servidor, lo que amplía aún más tus oportunidades como desarrollador. La versatilidad de JavaScript y su presencia en ambos lados, cliente y servidor, lo convierten en un lenguaje esencial en el mundo del desarrollo.",
        "Aprender JavaScript no solo te proporciona habilidades técnicas, sino que también te introduce en conceptos de programación fundamentales. Comprender temas como variables, funciones, y objetos en el contexto de JavaScript te facilita la transición a otros lenguajes de programación, lo que es valioso a medida que expandes tus habilidades.",
        "En resumen, aprender JavaScript es crucial para cualquier persona interesada en el desarrollo web. Desde la creación de páginas web interactivas hasta el desarrollo de aplicaciones complejas del lado del cliente y del servidor, JavaScript es una herramienta esencial que te coloca en el centro del mundo digital en constante evolución."
      ]
    },
    {
      lenguaje: "Python",
      card_img: "/images/Group_Card_js.png",
      card_description: "Python es un lenguaje de programación versátil y poderoso que se ha convertido en uno de los más populares en la industria.",
      content_modal: [
        "Python es un lenguaje de programación versátil y poderoso que se ha convertido en uno de los más populares en la industria. Aprender Python te proporciona una entrada fácil al mundo de la programación debido a su sintaxis clara y legible. Es un lenguaje ideal para principiantes, pero también es utilizado por expertos en campos como la inteligencia artificial, análisis de datos y desarrollo web.",
        "La comunidad de Python es vasta y activa, lo que significa que tienes acceso a una amplia gama de bibliotecas y herramientas. Python se utiliza en una variedad de aplicaciones, desde la automatización de tareas simples hasta el desarrollo de aplicaciones empresariales complejas. Al aprender Python, te unes a una comunidad global de desarrolladores y tienes acceso a recursos que facilitan el aprendizaje y la resolución de problemas.",
        "Python es el lenguaje elegido en campos como la inteligencia artificial y el aprendizaje automático. Frameworks como TensorFlow y PyTorch, que son fundamentales en estos campos, están escritos en Python. Aprender Python te brinda la capacidad de trabajar en proyectos de vanguardia, desde el procesamiento de imágenes hasta la creación de modelos predictivos avanzados.",
        "La simplicidad de Python no implica una limitación en cuanto a su potencial. Puedes utilizar Python para una variedad de tareas, incluido el desarrollo web con frameworks como Django y Flask, análisis de datos con pandas y visualización con bibliotecas como Matplotlib y Seaborn. La versatilidad de Python te permite adaptarte a diferentes roles y proyectos según tus intereses y habilidades.",
        "Python es utilizado en empresas líderes en tecnología y en sectores como finanzas, salud y ciencia. Al aprender Python, estás adquiriendo habilidades que son altamente demandadas en el mercado laboral actual. La capacidad de escribir código eficiente y efectivo en Python te hace valioso en una variedad de contextos profesionales.",
        "En resumen, aprender Python es una inversión inteligente para cualquier persona interesada en la programación. Su versatilidad, comunidad activa y aplicaciones en campos de vanguardia hacen de Python un lenguaje esencial para desarrolladores de todos los niveles. Ya sea que estés comenzando en la programación o busques avanzar en tu carrera, Python es una elección sólida que te abrirá puertas en el amplio mundo de la tecnología."
      ]
    }
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
                content={e}
              ></HomeCard>
            )
          }
          )}
          <HomeCard
            title="Y mas lenguajes"
            content={""}
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
    </>
  )
}