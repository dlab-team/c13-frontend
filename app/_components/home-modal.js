"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import "./home-modal.css"
import Link from "next/link";

/**
 * Función para renderizar y manejar un modal de la página principal.
 * 
 * @param {Object} param0 - Objeto con las propiedades del modal.
 * @param {string} param0.title - Título del modal.
 * @param {string} param0.content - Contenido del modal.
 * @param {boolean} param0.show - Indica si el modal debe mostrarse.
 * @param {function} param0.setShow - Función para establecer la visibilidad del modal.
 * @returns {JSX.Element} - Elemento JSX que representa el modal de la página principal.
 */
export default function HomeModal({ title, content, show, setShow}) {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    setOpen(show)
  }, [show])

  const closeDialog = () => {
    setOpen(false)
    setShow(false)
  }

  return (
    <>
      <dialog className={`${open ? "" : "close-modal"}`}>
        <div className="button_container">
          <button className="close_buttom" onClick={closeDialog}>X</button>
        </div>
        <h1>
          ¿Porque estudiar {title}?
        </h1>
        <section className="dialog_content">
          {content
            ? content.map((text, index) => {
              return (
                <div key={index}>
                  <p>{text}</p>
                </div>
              )
            }) : ""}
        </section>
        <Link href={`/que-aprenderas/${title.replace(" ", "-")}`}>Que Aprendere?</Link>
      </dialog>
    </>
  )
}