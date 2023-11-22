"use client"
import { useEffect, useState } from "react"
import "./home-modal.css"

export default function HomeModal({ title, content, show, setShow }) {
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
      </dialog>
    </>
  )
}