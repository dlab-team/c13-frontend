import React from 'react'
import Image from 'next/image'
import Footer from '../Footer'

export default function PorQueSQL() {
  return (
<>

    <section className={`about`} id='aceleracion'>
      <div className={`container-fluid text-center`}>
        <div className={`titulo-por-que pb-5`}>
          <h1 className={`mb-5`}>¿Por qué estudiar SQL?</h1>
        </div>
        <div className={`row justify-content-center box-container `}>
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>
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
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>

            <div className={`block-style-five animate-icon d-flex align-items-center flex-column text-center mb-50 wow fadeInUp green-card`}>
              <div className={`icon`}>
                <picture>
                  <Image
                    height={50}
                    width={150}
                    src="/images/icon-big-data-ama.webp"
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
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>

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
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>

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
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>

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
          <div className={`col-lg-4 col-md-4 col-sm-12 mb-5`}>

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

    <Footer />
    </>
  )
}
