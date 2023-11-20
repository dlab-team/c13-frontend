"use client"

import React from "react"
import { useContext } from "react"
import Image from "next/image"
import SendButton from "./sendButton"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import AuthContext from "../context/AuthContext"
import useSWR from "swr"
import Logout from "./logout"
import Link from "next/link"

const fetcher = (url) => {
  return fetch(url, {
    headers: { Authorization: `Bearer ${Cookies.get("JWT-cookie")}` },
  }).then((r) => r.json())
}

export default function Header() {
  const [notification, setNotification] = useState("d-none")
  const { auth } = useContext(AuthContext)

  const notificationUrl = `${process.env.API_BASE_URL}/notifications/`

  const {
    data: notificationData,
    error: notificationError,
    isValidating: notificationValidating,
  } = useSWR(auth ? notificationUrl : null, fetcher, {
    revalidateOnFocus: false,
  })

  useEffect(() => {
    if (notificationData && !notificationData.read) {
      setNotification("")
    }
  }, [notificationData])

  const handleModify = async (e) => {
    e.preventDefault()

    try {
      const req = await fetch(
        `${process.env.API_BASE_URL}/notifications/${notificationData.id}/read`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Cookies.get("JWT-cookie")}`,
          },
        }
      )

      const response = await req.json()

      if (response.read == true) {
        setNotification("d-none")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <div className="container-fluid">
        <Link href="/" className="py-4">
          <Image
            className="image-navbar"
            src="/images/logo-academia-bla.png"
            height={63}
            width={175}
            alt="Academia Desafío Latam"
            title="Academia Desafío Latam"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/categorias/javascript">
                Javascript interactivo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/que-aprenderas">
                Qué aprenderás
              </Link>
            </li>

            {auth && (
              <li className="nav-item">
                <Link className="nav-link" href="/categorias">
                  Ejercicios
                </Link>
              </li>
            )}
            {auth && (
              <li>
                <div className="btn-group">
                  <div className="element">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        height={20}
                        width={20}
                        src="/images/notificacion.png"
                        alt="desafiolatam"
                        priority={true}
                        className={`text-center`}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="red"
                        stroke="none"
                        className={`${notification}`}
                      >
                        <circle cx="6" cy="6" r="5" />
                      </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button
                          onClick={handleModify}
                          className={`${notification} notification-button`}
                        >
                          {notificationData && (
                            <>
                              {notificationData.message}
                              <span> Marcar como leído </span>
                            </>
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            )}
            {auth ? (
              <li>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-nav dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mi Perfil
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link
                        className="dropdown-item text-center mt-2"
                        href="/profile"
                      >
                        Mis logros
                      </Link>
                    </li>
                    <li className="pt-5">
                      <Logout />
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li>
                {/* <Link className="link-login" href="/ingreso/login"> */}
                <Link className="link-login" href="/ingreso">
                  <SendButton
                    className={`navButton`}
                    buttonText={"Iniciar sesión"}
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
