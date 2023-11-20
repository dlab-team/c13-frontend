"use client"
import { useState } from "react";
import "./home-card.css"
import HomeModal from "./home-modal"
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'],
});


export default function HomeCard({ key = null, last=false, title, content }) {
  const [openDialog, setOpenDialog] = useState(false)

  const showDialog = () => {
    setOpenDialog(true)
  }

  return (
    <>
      <div key={key} className={`why_card ${last? "and_more": ""}`} >
        <div className="title_card">
          <h1
            className="title_text"
          >{title}</h1>
        </div>
        <div>
          <button
            className={`${roboto.className} buttons`}
            onClick={showDialog}
          >Por que {title}?</button>
        </div>
        <HomeModal
        title={title}
        content={content}
        show={openDialog}
        setShow={setOpenDialog}
        ></HomeModal>
      </div>
    </>
  )
}