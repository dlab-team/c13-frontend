"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import "./home-modal.css"
import Link from "next/link";

export default function HomeModal({ title, content, show, setShow, learningPathContent }) {
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
        <Link href={`/que-aprenderas/[content]?content=${JSON.stringify(learningPathContent)}`}>Que Aprendere?</Link>
      </dialog>
    </>
  )
}