"use client";

import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import SendButton from "../../_components/sendButton";
import Footer from "@/app/Footer";
import Image from "next/image";
import SqlExecuter from "@/app/_components/_exercises/sqlExecuter";
import executeCode from "./codeExecution";
import { useEffect } from "react";

const JavascriptPrueba = () => {
  const editorRef = useRef(null);
  const [exercise, setExercise] = useState(""); // La variable exercise se inicializa aquí
  const [ejercicio, setEjercicio] = useState("");
  const [resultado, setResultado] = useState(
    "El resultado de tu ejercicio irá aquí"
  );
  const [error, setError] = useState(
    "*Tip por si hay un error en tu respuesta"
  );
  const [toExecute, setToExecute] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [tokenContent, setTokenContent] = useState(null);
  const text = '"Hola Mundo"';
  const [exerciseData, setExerciseData] = useState(null);

  useEffect(() => {
    const exerciseEndpoint =
      "https://tutorial-interactivo-sql-2.onrender.com/api/v2/courses/1/categories/351/exercises/3371";

    const fetchData = async () => {
      try {
        // Realizar la solicitud GET usando fetch
        const response = await fetch(exerciseEndpoint);

        // Verificar si la solicitud fue exitosa (código de respuesta en el rango 200-299)
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }

        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // Manejar los datos obtenidos
        // console.log("Datos obtenidos:", data);

        // Guardar los datos en el estado
        setExerciseData(data);
      } catch (error) {
        // Manejar errores de red u otros errores
        console.error("Error en la solicitud:", error);
      }
    };

    // Llamar a la función fetchData cuando el componente se monte
    fetchData();
  }, []);

  let wrapperContent = exerciseData?.wrapper || "";
  wrapperContent = wrapperContent.replace(/\\n/g, "\n");

  const params = exerciseData?.test_cases[0]?.params;
  const paramName = params ? Object.keys(params)[0] : null;
  const paramValue = params ? params[paramName] : null;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  if (toExecute == true) {
    setToExecute(false);
    setError("*Tip por si hay un error en tu respuesta");
    setResultado("El resultado de tu ejercicio irá aquí");
  }

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <button
            className="btn btn-dark rounded-0 w-50"
            style={{ background: "#739e2d" }}
          >
            JavaScript
          </button>
          <button className="btn btn-secondary rounded-0 w-50">Básico</button>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ background: "#FFF" }}>
            {exerciseData && <h3 className="m-2">{exerciseData.title}</h3>}
            <p className="m-2m-2">
              {exerciseData && <strong>{exerciseData.content}</strong>}{" "}
            </p>
            <div className="m-2">
              <strong>Esperado:</strong>
              <ul>
                {" "}
                <li>Imprima su resultado por consola.</li>
                <li>
                  Nombra una variable como: <strong>{paramName}</strong> y
                  asigna un valor de <strong>{paramValue}</strong>.
                </li>
                <li>
                  {exerciseData && exerciseData.test_cases[0]?.results && (
                    <p>
                      Deberías ver en la consola el mensaje:{" "}
                      {exerciseData.test_cases[0].results}.
                    </p>
                  )}
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
                  {/* {error} */}
                </p>
              </div>
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
              value={wrapperContent}
              options={{
                fontSize: "16px",
              }}
              onChange={(value) => setEjercicio(value)}
              onMount={handleEditorDidMount}
              pre={true}
            />
            <div className="text-white bg-dark ">
              <h6 className="mx-2">Consola:</h6>
              <div className="px-3">
                <p>{resultado}</p>
              </div>
              <div className="col-12 row">
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <Image
                    width={75}
                    height={75}
                    src={"/images/HintRed.png"}
                    alt="desafiolatam"
                    priority={true}
                    className="hintImage"
                  />
                </div>
                <div className="d-flex align-items-start overflow-auto console col-10 ">
                  <div className="container">
                    <p className="tip" style={{ height: "90px" }}>
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                languageId,
                setResultado,
                setError
              );
            }}
            buttonText={"Ejecuta tu consulta"}
          >
            Ejecutar consulta
          </SendButton>
        </div>

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

export default JavascriptPrueba;
