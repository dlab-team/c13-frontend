"use client"
//import { useState } from "react";
import "./home-card.css"
//import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// const roboto = Roboto({
//   weight: ['300', '700'],
//   subsets: ['latin'],
// });


export default function HomeCard({lenguage = "", url_img }) {
  return (
    <>
      <Link className="link_cart" href={`/que-aprenderas/${lenguage.replace(" ", "-")}`}>
        <Image className="imgcart" src={url_img} width={361} height={141} alt="lenguage cart" ></Image>
      </Link>
    </>
  )
}