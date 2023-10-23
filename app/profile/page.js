'use client'

import useSWR from "swr";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Image from 'next/image'
import React from 'react'
import Footer from '../Footer';
import styles from "../style.module.css";
import CertificateSection from "../_components/certificateSection";
import SendButton from "../_components/sendButton";

const fetcher = (url) => {
  return fetch(url, { headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` } }).then((r) => r.json());
}

export default function Page() {
  const [user, setUser] = useState({
    name: "",
    last_name: "",
  });
  const [isLoading, setIsLoading] = useState(false);


  const url = `${process.env.API_BASE_URL}/profiles/`

  const { data, error, isValidating } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  const handleModify = async (e) => {
    e.preventDefault();

    try {
      const req = await fetch(`${process.env.API_BASE_URL}/profiles/${data.user.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("JWT-cookie")}`
        },
        body: JSON.stringify({ user }),
      });

      const response = await req.json();

      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  };

  const handleModifyForCertificate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const req = await fetch(`${process.env.API_BASE_URL}/certificate_for_unnamed_users/${data.user.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("JWT-cookie")}`,
        },
        body: JSON.stringify({ user }),
      });

      const response = await req.json();
      setIsLoading(false);
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  };

  //To show Bootstrap modal in Nextjs
  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#exampleModal");

    myModal.show();
  }

  const showModalCertificate = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#exampleModalCertificate");

    myModal.show();
  }


  return (

    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modifica tus datos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className={``} onSubmit={handleModify}>
                <label
                  htmlFor="nombre"
                  className={styles.labelCredentials}
                >
                  Nuevo nombre
                </label>
                <input
                  type="nombre"
                  name="nombre"
                  id="nombre"
                  className={styles.inputCredentials}
                  placeholder="Nombre"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  required
                />
                <label
                  htmlFor="apellido"
                  className={styles.labelCredentials}
                >
                  Nuevo apellido
                </label>
                <input
                  type="apellido"
                  name="apellido"
                  id="apellido"
                  placeholder="Apellido"
                  className={styles.inputCredentials}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      last_name: e.target.value,
                    })
                  }
                  required
                />
                <div className={styles.divLoginButton}>
                  <SendButton
                    type={'submit'}
                    // onClick={handleLogin}
                    // isLoading={isLoading}
                    className={` ${styles.loginButton} `} buttonText={'Modifica tus datos'}
                  />
                </div>
                <div className="text-center mt-2">
                  {error && <p className="mt-4">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCertificate"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCertificate">
                Modifica tus datos para generar tu certificado
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className={``} onSubmit={handleModifyForCertificate}>
                <label
                  htmlFor="nombre"
                  className={styles.labelCredentials}
                >
                  Nuevo nombre
                </label>
                <input
                  type="nombre"
                  name="nombre"
                  id="nombre"
                  className={styles.inputCredentials}
                  placeholder="Nombre"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                  required
                />
                <label
                  htmlFor="apellido"
                  className={styles.labelCredentials}
                >
                  Nuevo apellido
                </label>
                <input
                  type="apellido"
                  name="apellido"
                  id="apellido"
                  placeholder="Apellido"
                  className={styles.inputCredentials}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      last_name: e.target.value,
                    })
                  }
                  required
                />
                <div className={styles.divLoginButton}>
                  <SendButton
                    type={'submit'}
                    // onClick={handleLogin}
                    isLoading={isLoading}
                    className={` ${styles.loginButton} `} buttonText={'Modifica tus datos'}
                  />
                </div>
                <div className="text-center mt-2">
                  {error && <p className="mt-4">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <section id='aceleracion' className={`${styles.queAprenderas} container`}>
        <h1 className={`text-center pb-5`}>Mi Perfil</h1>

        <div className="profile-certificates">
          <div className="row">
            <div className="col-12 col-md-3 pagos-bottom-text">
              <h3 className="">
                IMPORTANTE
              </h3>
            </div>
            <div className="text-left col-12 col-md-9 pagos-bottom-text">
              <ul>
                <li>
                  En esta página puedes descargar tus certificados y compartirlos en Linkedin.
                </li>
                <li>
                  Para obtener tus certificados debes desbloquearlos.
                </li>
                <li>
                 <b>
                   En este momento sólo se puedes desbloquear los primeros dos certificados, dado que continuamos cargando ejercicios para las otras categorías.
                  </b>
                </li>
                <li>
                  Para desbloquear el primer certificado debes completar desde la categoría &quot;Seleccionando columnas&quot; hasta la categoría &quot;Operaciones con fechas&quot;.
                </li>
                <li>
                  Para desbloquear el segundo certificado debes completar desde la categoría &quot;Funciones de Agregación&quot; hasta la categoría &quot;Having&quot;.
                </li>
                <li>
                  Una vez generado un certificado con tu nombre, no se puede volver a generar.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-4 profile-welcome'>
            <h3>Sobre mí</h3>

            <div className="profile-divider-welcome"></div>
            {data &&
              <>
                <div>
                  <div className="profile-details-container mb-3">
                    <h3>{data.user.first_name ? data.user.first_name : 'Sin Nombre'} {data.user.last_name}</h3>
                    <button className="update-btn" onClick={data.user.first_name ? showModal : showModalCertificate} type="button" data-toggle="modal" data-target="#exampleModal"> <svg viewBox="0 0 24 24" width="1em" height="1em" className=" ui-svg-icon" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M19 2.879c-.297 0-.583.118-.793.328l-9.304 9.304-.529 2.115 2.115-.529 9.304-9.304A1.121 1.121 0 0019 2.879zm-2.207-1.086a3.121 3.121 0 014.414 4.414l-9.5 9.5a.999.999 0 01-.465.263l-4 1a1 1 0 01-1.212-1.212l1-4a1 1 0 01.263-.465l9.5-9.5zM.879 3.879A3 3 0 013 3h7a1 1 0 110 2H3a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H3a3 3 0 01-3-3V6a3 3 0 01.879-2.121z"></path></svg> </button>
                  </div>
                  <p>{data.user.email}</p>
                  {/* <p>{data.user.survey_data.country}</p> */}
                </div>
                <div className="not-name-profile">{!data.user.first_name ? <p>*Ingresa tu nombre y apellido para obtener tus certificados</p> : ''}</div>
              </>
            }
          </div>
          <div className='col-12 col-md-8 profile-certificates'>
            <div className="col-12 ">
              <h3 className="text-center">Mis certificados</h3>
              <div className="profile-divider"></div>
            </div>
            <CertificateSection />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}






