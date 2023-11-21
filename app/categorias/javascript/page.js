"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import SendButton from "../../_components/sendButton"
import Footer from "@/app/Footer"
import Image from "next/image"

const JavascriptPrueba = () => {
  const editorRef = useRef(null)
  const [ejercicio, setEjercicio] = useState("")
  const [toExecute, setToExecute] = useState(false)

  const text = '"Hola Mundo"'

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  if (toExecute == true) {
    console.log("ejecutar script", ejercicio)
    alert("ejecutar script: \n" + ejercicio)
    setToExecute(false)
  }

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <button className="btn btn-dark rounded-0 w-50">Curso</button>
          <button className="btn btn-secondary rounded-0 w-50">
            Nivel(Básico)
          </button>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ background: "#FFF" }}>
            <h3 className="m-2">Ejercicio 1: Hola Mundo</h3>
            <p className="m-2">
              <strong>Objetivo:</strong> Escribe y ejecuta tu primer código en
              JavaScript para mostrar el mensaje {text}
            </p>
            <div className="m-2">
              <strong>Esperado:</strong>
              <ul>
                <li>Deberías ver en la consola el mensaje {text}.</li>
                <li>
                  Si ves el mensaje, ¡felicidades! Has completado tu primer
                  programa en JavaScript.
                </li>
              </ul>
              
            </div>
          </div>

          <div className="col-md-6">
            <Editor
              id="inputTexto"
              type="text"
              name="script"
              theme="vs-dark"
              defaultLanguage="javascript"
              height="40vh"
              options={{
                fontSize: "16px",
              }}
              onChange={(value) => setEjercicio(value)}
              onMount={handleEditorDidMount}
            />
            <div className="text-white bg-dark">
              <h6 >Consola</h6>
              <p className="m-2">El resultado de tu ejercicio irá aquí</p>
              <div className="d-flex align-items-start">
                <Image
                  width={50}
                  height={50}
                  src={"/images/HintRed.png"}
                  alt="desafiolatam"
                  priority={true}
                  className={"hintImage mt-4"}
                />
                <div
                  className="container"
                  
                >
                  <p style={{ height: "90px", marginTop: "30px" }}>
                    *Tip por si hay un error en tu respuesta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <SendButton
            className="queryButton"
            type="submit"
            onClick={() => setToExecute(true)}
            buttonText="Ejecuta tu script"
          >
            Ejecutar script
          </SendButton>
        </div>
        <div className="d-flex justify-content-between my-5">
          <button className="btn btn-secondary">Anterior</button>
          <button className="btn btn-secondary">Siguiente</button>
        </div>
      </div>
    </>
  )
}

export default JavascriptPrueba
