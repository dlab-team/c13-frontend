import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "./style.module.css";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Footer({ props }) {
  return (
    <>
      <footer className="">
        <div className={`footer-content ${roboto.className}`}>
          <div className="footer-logo mt-5">
            <Link href="https://www.desafiolatam.com" >
            <Image
              height={145}
              width={250}
              src="/images/logo-academia-ve.png"
              alt="desafiolatam"
              priority={true}
              className={`text-center`}
              />
              </Link>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-xl-4">
                <div className="footer-partners">
                  <h3>Contacto General</h3>

                  <h5>
                    <i className="fa fa-whatsapp" aria-hidden="true"></i> +56 9
                    5117 7975
                  </h5>
                  <h5>
                    <i className="fa fa-whatsapp" aria-hidden="true"></i> +52 1
                    55 4047 7251
                  </h5>

                  <h4>Horario de Atención WhatsApp:</h4>
                  <span>Lunes a Viernes de 10:00 a 18:00 </span>
                  <h4 className="mt-2">Contacto Admisión:</h4>
                  <Link
                    className="mailto"
                    href="mailto:inscripciones@desafiolatam.com"
                  >
                    inscripciones@desafiolatam.com
                  </Link>
                  <h4 className="mt-2">Contacto Estudiantes:</h4>
                  <Link className="mailto" href="mailto:ayuda@desafiolatam.com">
                    ayuda@desafiolatam.com
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <div className={`footer-menu ${roboto.className}`}>
                  <h3>Carreras</h3>
                  <ul>
                    <li>
                      <Link href="https://desafiolatam.com/full-stack-javascript/">
                        Desarrollo Full Stack JavaScript
                      </Link>
                    </li>

                    <li>
                      <Link href="https://desafiolatam.com/diseno-ux-ui/">
                        Diseño UX/UI
                      </Link>
                    </li>

                    <li>
                      <Link href="https://desafiolatam.com/data-science/">
                        Data Science
                      </Link>
                    </li>

                    <li>
                      <Link href="https://desafiolatam.com/front-end-react/">
                        Front End
                      </Link>
                    </li>

                    <li>
                      <Link href="https://desafiolatam.com/data-analytics/">
                        Data Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <div className="footer-menu">
                  <h3>Nuestra comunidad</h3>
                  <ul>
                    <li>
                      <Link href="/quienes-somos">Quiénes somos</Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/estudiantes">
                        Estudiantes
                      </Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/comunidad">Comunidad</Link>
                    </li>

                    <div className="dropdown-divider"></div>
                    <li>
                      <Link href="http://blog.desafiolatam.com/">Blog</Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/becas">Becas</Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/trabaja-con-nosotros">
                        Trabaja con Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/equipo-docente">
                        Postula para ser docente
                      </Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/politica-de-calidad">
                        Políticas de Calidad
                      </Link>
                    </li>
                    <li>
                      <Link href="https://desafiolatam.com/politica-privacidad-de-datos">
                        Política de Privacidad y Protección de Datos
                      </Link>
                    </li>
                  </ul>

                  <div className="footer-redes">
                    <ul>
                      <li>
                        <Link
                          href="https://www.facebook.com/DesafioLatam/"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/desafiolatam/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/desafiolatam"
                          target="_blank"
                        >
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/channel/UCz0ekVt3TQ65voddo9xVOQw/"
                          target="_blank"
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/creditos/" className="footer-button">
            <button className="btn ">Desarrollado por:</button>
        </Link>
      </footer>
    </>
  );
}
