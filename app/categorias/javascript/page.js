"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState, useEffect } from "react"
import SendButton from "../../_components/sendButton"
import Footer from "@/app/Footer"
import Image from "next/image"
import SqlExecuter from "@/app/_components/_exercises/sqlExecuter"
import executeCode from "./codeExecution"
import Link from "next/link"
import styles from "/app/learning-path.module.css"

import { getPostsRequest, createPostRequest } from "../../api/posts"

const JavascriptPrueba = () => {
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

  let [test, setTest] = useState(3388)
  const [exeApi, setExeApi] = useState({})

  const [valor, setValor] = useState("const a")

  // let valor = "const a"
  /*
  function main() {
    document.getElementById('numero').value = 10
  }
  main()
  */

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  if (toExecute == true) {
    console.log("ejecutar script", ejercicio)
    setEjercicio(ejercicio)

    try {
      console.log("eval***")

      eval(ejercicio)

      setResultado(ejercicio)
      // alert("ejecutar script: \n" + ejercicio)
      // enviar ejercicio para su ejecución
      ;(async () => {
        try {
          const objeto = {
            content: ejercicio,
            // expected_result: exeApi.expected_result,
            expected_result: exeApi.test_cases[0].results,
            exercise_type: exeApi.exercise_type,
            // fun: exeApi.fun,
          }

          const exeRun = await createPostRequest(objeto)

          if (exeRun.asserted == false) {
            setMensaje("resultado no esperado")
          } else {
            setMensaje("resultado esperado OK")
          }

          // si trae error desde apipup*
          if (exeRun.err) {
            console.log(exeRun.err)
            setErrado(exeRun.err)
          }

          // pedir evaluacion de apipup
        } catch (error) {
          console.log(error.message)
        }
      })()

      setToExecute(false)
    } catch (error) {
      console.log(error.message)
      const msjError = error.message
      setErrado(msjError)
      setToExecute(false)

      return
    }
  }

  useEffect(() => {
    ;(async () => {
      console.log(test)
      const res = await getPostsRequest()
      // const dataExe = res.data[test] // ****
      const dataExe = res.data // ****
      console.log("getPosts", dataExe)
      if (dataExe) {
        const wrap = dataExe.wrapper.split(
          '<!DOCTYPE html>\\r\\n<html lang=\\"en\\">\\r\\n<head>\\r\\n    <meta charset=\\"UTF-8\\">\\r\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\r\\n    <title>Document'
        )
        const wrap2 = wrap[1].split(
          "<\\/title>\\r\\n<\\/head>\\r\\n<body>\\r\\n    "
        )
        setExeApi(dataExe)

        const wrapp = wrap2[1].replace(/['\\"]+/g, "")

        document.getElementById("ht").innerHTML = wrapp
        let index = wrap2[1].indexOf("script")
        let porcion = wrap2[1].slice(index + 19)

        // setValor("function main(){ escribe }")
        setValor(porcion)
      } else {
        alert("sin ejercicio")
        setTest(0)
      }
    })()
  }, [test])

  return (
    <>
      <div className="container">
        <div
          className={`${styles.contenedorBotonesLearningPath} text-center my-5`}
        >
          <button className={`${styles.BotonesLeaningPath} rounded-5 w-50`}>
            JavaScript
          </button>
          <Link
            className={`${styles.BotonesLeaningPath} rounded-5 w-50`}
            href={"/categorias/html"}
          >
            Básico
          </Link>
        </div>
        <div className="row">
          <div
            className="col-md-6"
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
            <div className="m-2">
              <p id="ht"></p>
              <br />
              {/* <strong>Esperado:</strong>
              <ul>
                <li>Deberías ver en la consola el mensaje {text}.</li>
                <li>
                  Si ves el mensaje, ¡felicidades! Has completado tu primer
                  programa en JavaScript.
                  <br></br>
                  <br></br>
                </li>
              </ul>
              <div className="container bg-white">
                <Image
                  width={95}
                  height={95}
                  src={"/images/Hint.png"}
                  alt="desafiolatam"
                  priority={true}
                  className={"hintImage mt-4"}
                />
                <p className="tip" style={{ height: "100px" }}>
                  *Tip por si hay un error en tu respuesta
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <Editor
              id="inputTexto"
              type="text"
              name="script"
              value={valor}
              theme="vs-dark"
              defaultLanguage="javascript"
              height="80vh"
              options={{
                fontSize: "16px",
              }}
              onChange={(value) => setEjercicio(value)}
              onMount={handleEditorDidMount}
            />
            <div className="text-white bg-dark">
              <h6 className="text-center pt-4">Consola</h6>
              <p className="m-2 text-center pt-5">{resultado}</p>
              <div className="d-flex align-items-start">
                <div className="container">
                  <p
                    className="tip text-center"
                    style={{ height: "90px", marginTop: "30px" }}
                  ></p>
                </div>
              </div>
            </div>
            <div className={`text-white ${styles.seccionTips}`}>
              <p className={`${styles.seccionTipsTitulos} m-2 text-center`}>
                {resultado}
              </p>
              <div className="d-flex align-items-start">
                <Image
                  width={50}
                  height={50}
                  src={"/images/HintRed.png"}
                  alt="desafiolatam"
                  priority={true}
                  className={"hintImage mt-4"}
                />
                <div className="container">
                  <p
                    className={`${styles.seccionTipsTitulos} m-2 tip text-center`}
                  >
                    *Tip por si hay un error en tu respuesta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          {exeApi.exercise_type ? (
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
          ) : (
            <SendButton
              className="queryButton"
              type="submit"
              onClick={() => setToExecute(true)}
              buttonText="Ejecuta tu script"
            >
              Ejecutar script
            </SendButton>
          )}
        </div>
        <SqlExecuter
          exercise={exercise}
          toExecute={toExecute}
          setToExecute={setToExecute}
          editorRef={editorRef}
          setIsExecuting={setIsExecuting}
        />
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

export default JavascriptPrueba
