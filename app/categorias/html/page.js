"use client";

import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import SendButton from "../../_components/sendButton";
import Footer from "@/app/Footer";
import Image from "next/image";
import SqlExecuter from "@/app/_components/_exercises/sqlExecuter";
import styles from "/app/learning-path.module.css";
// import executeCode from "./codeExecution";
import Link from "next/link";

const Basico = () => {
  const editorRef = useRef(null);
  const [exercise, setExercise] = useState(""); // La variable exercise se inicializa aquí
  const [ejercicio, setEjercicio] = useState("");
  const [resultado, setResultado] = useState(
    `"Estos datos provienen de la evaluación del codigo"`
  );
  const [toExecute, setToExecute] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [tokenContent, setTokenContent] = useState(null);
  const text = '"Hola Mundo"';

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  if (toExecute == true) {
    setResultado(ejercicio);
    // alert("ejecutar script: \n" + ejercicio)
    // enviar ejercicio para su ejecución
    setToExecute(false);
  }

  const [codigoHTML, setCodigoHTML] = useState("");
  const handleEditorChange = (value) => {
    // Actualiza el estado con el nuevo código HTML
    setCodigoHTML(value);
    setIframeUrl(`data:text/html;charset=utf-8,${encodeURIComponent(value)}`);
  };
  const [iframeUrl, setIframeUrl] = useState('');


  return (
    <>
      <div className="container">
        <div className={`${styles.contenedorBotonesLearningPath} text-center my-5`} >
          <Link className={`${styles.BotonesLeaningPath}   rounded-5`} href={"/categorias/javascript"}>
           HTML
          </Link>
          <button className={`${styles.BotonesLeaningPath} rounded-5`}>Básico</button>
        </div>

        <div className="row">

          <div className="col-md-4" style={{
							backgroundColor: "#FFF",
							borderColor: "#739e2d",
							borderStyle: "solid",
						}}>
            <h3 className="m-2">Ejercicio: Visualiza HTML</h3>
            <p className="m-2">
              <strong>Objetivo:</strong> Escribe tu primer código en
              HTML para mostrar el mensaje {text}
            </p>
            <div className="m-2">
              <strong>Esperado:</strong>
              <ul>
                <li>Deberías ver en el DOM el mensaje {text}.</li>
                <li>
                  Si ves el mensaje, ¡felicidades! Has completado tu primer
                  programa en JavaScript.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <Editor
              id="inputTexto"
              type="text"
              name="script"
              theme="vs-dark"
              defaultLanguage="html"
              height="80vh"
              options={{
                fontSize: "16px",
              }}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
            />
            <div className={`text-white ${styles.seccionTips}`}>
              <p className={`${styles.seccionTipsTitulos} m-2 text-center`}>{resultado}</p>
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
                    className={`${styles.seccionTipsTitulos} m-2 tip`}
                    
                  >
                    *Tip por si hay un error en tu respuesta
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{
							backgroundColor: "#FFF",
							borderColor: "#739e2d",
							borderStyle: "solid",
						}}>
            <h3 className="text-center m-2">HTML</h3>
            <iframe
              title="Vista HTML"
              src={iframeUrl}
              style={{ width: '100%', height: '400px', border: 'none' }}
            ></iframe>
            {/* <div dangerouslySetInnerHTML={{ __html: codigoHTML }}></div> */}
          </div>
        </div>

        <div className="text-end mt-4">
          <SendButton
            className={`queryButton`}
            type="submit"
            onClick={async () => {
              const inputValue = editorRef.current.getValue();
              const languageId = 63;
              // Llama a la función externa para ejecutar el código
              await executeCode(
                inputValue,
                setTokenContent,
                setToExecute,
                languageId
              );
            }}
            buttonText={"Ejecuta tu consulta"}
          >
            Ejecutar consulta
          </SendButton>
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
  );
};

export default Basico;