"use client"
import { useState } from "react";
import "./home-card.css"
import HomeModal from "./home-modal"
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});


export default function HomeCard({ last = false, title, content }) {
  const [openDialog, setOpenDialog] = useState(false)

  const showDialog = () => {
    setOpenDialog(true)
  }

  return (
    <>
      <div className={`why_card ${last ? "and_more" : ""}`} >
        <section className="img_card">
          {content
            ? <Image src={content.card_img} width={500} height={500} alt="lenguaje_img" />
            : ""}
        </section>
        <section className="content_card">
          <div className="title_card">
            <h3
              className="title_text"
            >Curso {title}</h3>
          </div>
          <p className="description_card">
            {content.card_description}
          </p>
          <div className="button_container_card">
            <button
              className={`${roboto.className} buttons`}
              onClick={showDialog}
            >Por que {title}?</button>
          </div>
        </section>
        {!last ?
          <HomeModal
            title={title}
            content={content.content_modal}
            learningPathContent={content.learning_path}
            show={openDialog}
            setShow={setOpenDialog}
          ></HomeModal> : ""}
      </div>
    </>
  )
}