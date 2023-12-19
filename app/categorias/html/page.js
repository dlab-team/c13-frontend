"use client";

import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import SendButton from "../../_components/sendButton";
import Footer from "@/app/Footer";
import Image from "next/image";
import SqlExecuter from "@/app/_components/_exercises/sqlExecuter";
// import executeCode from "./codeExecution";
import Link from "next/link";
import styles from "/app/html-style.module.css";

const Basico = () => {
	const editorRef = useRef(null);
	const [exercise, setExercise] = useState(""); // La variable exercise se inicializa aquí
	const [ejercicio, setEjercicio] = useState("");
	const [resultado, setResultado] = useState(
		"El resultado de tu ejercicio irá aquí"
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
  };

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <button
            className="btn btn-dark rounded-0 w-50 text-decoration-none"
            style={{ background: "#739e2d"  }}
          >
           <Link href={"/categorias/javascript"}>JavaScript</Link> 
          </button>
          <button className="btn btn-secondary rounded-0 w-50">Básico</button>
        </div>

        <div className="row">
          <div className="col-md-4" style={{ background: "#FFF" }}>
            <h3 className="m-2">Ejercicio 2: Hola Mundo</h3>
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

          <div className="col-4">
            <Editor
              id="inputTexto"
              type="text"
              name="script"
              theme="vs-dark"
              defaultLanguage="html"
              height="40vh"
              options={{
                fontSize: "16px",
              }}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
            />
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
              <h6>Consola</h6>
              <p className="m-2">{resultado}</p>
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
                    className="tip"
                    style={{ height: "90px", marginTop: "30px" }}
                  >
                    *Tip por si hay un error en tu respuesta
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="m-2">Vista HTML:</h3>
              <div dangerouslySetInnerHTML={{ __html: codigoHTML }}></div>
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
