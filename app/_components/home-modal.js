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
      <dialog className={`${open? "": "close-modal"}`}>
        <button onClick={closeDialog}>X</button>
        <h1>
          ¿Porque estudiar {title}?
        </h1>
        <section>
          <div>
            ex
          </div>
          <div>
            ex
          </div>
          <div>
            ex
          </div>
          <div>
            ex
          </div>
        </section>
      </dialog>
    </>
  )
}