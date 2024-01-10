"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState, useEffect } from "react"
import SendButton from "../../_components/sendButton"
import Footer from "@/app/Footer"
import Image from "next/image"
import SqlExecuter from "@/app/_components/_exercises/sqlExecuter"
import Link from "next/link"

import { getPostsRequest, createPostRequest } from "../../api/posts"

const Basico = () => {
  const editorRef = useRef(null)
  const [exercise, setExercise] = useState("") // La variable exercise se inicializa aquí
  const [ejercicio, setEjercicio] = useState("")
  const [errado, setErrado] = useState("")
  const [resultado, setResultado] = useState(
    `"Estos datos provienen de la evaluación del codigo"`
  )
  const [toExecute, setToExecute] = useState(false)
  const [isExecuting, setIsExecuting] = useState(false)
  const [tokenContent, setTokenContent] = useState(null)
  const text = '"Hola Mundo"'

  // let [test, setTest] = useState(3388)
  const [exeApi, setExeApi] = useState({})
  const [valor, setValor] = useState("const a")
  const [mensaje, setMensaje] = useState("")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  if (toExecute == true) {
    setErrado("")
    setMensaje("")
    setEjercicio(ejercicio)
    setResultado(ejercicio)
    // alert("ejecutar script: \n" + ejercicio)
    // enviar ejercicio para su ejecución
    ;(async () => {
      try {
        // enviar desarrollo del usuario y resultado esperado a la apipup*
        const objeto = {
          content: ejercicio,
          expected_result: exeApi.test_cases[0].results,
          // fun: exeApi.fun,
        }

        const exeRun = await createPostRequest(objeto)

        if (exeRun.asserted == false) {
          setMensaje("resultado no esperado")
          setErrado("resultado no esperado")
        } else {
          setMensaje("resultado esperado OK ¡felicidades! ")
        }

        // si trae error desde apipup*
        if (exeRun.err) {
          console.log(exeRun.err)
          // setErrado(exeRun.err)
        }
      } catch (error) {
        console.log(error.message)
      }
    })()
    setToExecute(false)
  }

  const [codigoHTML, setCodigoHTML] = useState("")
  const handleEditorChange = (value) => {
    setEjercicio(value)

    // Actualiza el estado con el nuevo código HTML
    setCodigoHTML(value)
    setIframeUrl(`data:text/html;charset=utf-8,${encodeURIComponent(value)}`)
  }
  const [iframeUrl, setIframeUrl] = useState("")

  useEffect(() => {
    ;(async () => {
      // console.log(test)
      const res = await getPostsRequest()
      // const dataExe = res.data[test] // ****
      const dataExe = res.data // ****

      if (dataExe) {
        setExeApi(dataExe)
        const wrapperHtml = dataExe.wrapper
          .split("\\r\\n")
          .join("\r\n")
          .split("\\")
          .join("")

        setValor(wrapperHtml)
      } else {
        alert("sin ejercicio")
        // setTest(0)
      }
    })()
  }, []) // test

  return (
    <>
      <div className="container">
        <div className={` text-center my-5`}>
          <Link className={`  rounded-5`} href={"/categorias/javascript"}>
            DOM
          </Link>
          <button className={`rounded-5`}>Básico</button>
        </div>

        <div className="row">
          <div
            className="col-md-4"
            style={{
              backgroundColor: "#FFF",
              borderColor: "#739e2d",
              borderStyle: "solid",
            }}
          >
            <h3 className="m-2">{exeApi.title}</h3>
            <p className="m-2">
              <strong>Objetivo:</strong> {exeApi.content}
            </p>
          </div>

          <div className="col-md-4">
            <Editor
              id="inputTexto"
              type="text"
              name="script"
              value={valor}
              theme="vs-dark"
              defaultLanguage="html"
              height="80vh"
              options={{
                fontSize: "16px",
              }}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
            />
            <div className={`text-black `}>
              <h5 className={` m-2 text-center`}>
                {errado ? (
                  // {resultado ? (
                  <>{}</>
                ) : (
                  <div>
                    <br />
                    <p>El resultado de tu ejercicio:</p>

                    {mensaje ? (
                      <>
                        <div>
                          <h3>{mensaje}</h3>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </h5>
              <div className="d-flex align-items-start">
                {errado ? (
                  <div className="d-flex align-items-start bg-secondary">
                    <Image
                      width={50}
                      height={50}
                      src={"/images/HintRed.png"}
                      alt="desafiolatam"
                      priority={true}
                      className={"hintImage mt-4"}
                    />
                    <div className="container">
                      <h3>{mensaje}</h3>
                      <p style={{ height: "90px", marginTop: "30px" }}>
                        *Tip por si hay un error en tu respuesta:{" "}
                        <span className="text-black"> ( {errado} )</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <>{}</>
                )}
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              backgroundColor: "#FFF",
              borderColor: "#739e2d",
              borderStyle: "solid",
            }}
          >
            <h3 className="text-center m-2">HTML</h3>
            <iframe
              title="Vista HTML"
              src={iframeUrl}
              style={{ width: "100%", height: "400px", border: "none" }}
            ></iframe>
            {/* <div dangerouslySetInnerHTML={{ __html: codigoHTML }}></div> */}
          </div>
        </div>

        <div className="text-end mt-4">
          {
            (exeApi.exercise_type = 2 ? (
              <SendButton
                className="queryButton"
                type="submit"
                onClick={() => setToExecute(true)}
                buttonText="Ejecuta tu script"
              >
                Ejecutar script
              </SendButton>
            ) : (
              <SendButton
                className={`queryButton`}
                type="submit"
                onClick={async () => {
                  const inputValue = editorRef.current.getValue()
                  const languageId = 63
                  // Llama a la función externa para ejecutar el código
                  await executeCode(
                    inputValue,
                    setTokenContent,
                    setToExecute,
                    languageId
                  )
                }}
                buttonText={"Ejecuta tu consulta"}
              >
                Ejecutar consulta
              </SendButton>
            ))
          }
        </div>
        {
          (exeApi.exercise_type = 2 ? (
            <></>
          ) : (
            <SqlExecuter
              exercise={exercise}
              toExecute={toExecute}
              setToExecute={setToExecute}
              editorRef={editorRef}
              setIsExecuting={setIsExecuting}
            />
          ))
        }
        <div className="d-flex justify-content-between my-5">
          <button
            className="btn btn-secondary"
            style={{ background: "#739e2d" }}
          >
            Anterior
          </button>
          <button
            className="btn btn-secondary"
            style={{ background: "#739e2d" }}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  )
}

export default Basico
