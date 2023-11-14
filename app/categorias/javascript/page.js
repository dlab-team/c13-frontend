"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import SendButton from "../../_components/sendButton"

const JavascriptPrueba = () => {

  const editorRef = useRef(null)
  const [ejercicio, setEjercicio] = useState('')
  const [toExecute, setToExecute] = useState(false)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  if (toExecute == true) {
    console.log('ejecutar script', ejercicio)
    alert("ejecutar script: \n" + ejercicio)
    setToExecute(false)
  }

  return (
    <>
      <div>
        <div>JavascriptPrueba</div>
        <h5>Inicializa una constante</h5>
        <div className="boxJsEditor">
          <Editor
            id="inputTexto"
            type="text"
            name="script"
            theme="vs-dark"
            defaultLanguage="javascript"
            height="30vh"
            options={{
              fontSize: "16px",
            }}
            onChange={(value) => setEjercicio(value)}
            onMount={handleEditorDidMount}
          />
          <div className="text-white">
            <h6>Consola</h6>
            <p>El resultado de tu prueba irá aquí</p>
          </div>
        </div>
        <div className="scriptButtons">
          <SendButton
            className={`queryButton`}
            type="submit"
            onClick={() => setToExecute(true)}
            buttonText={"Ejecuta tu script"}
          >
            Ejecutar script
          </SendButton>
        </div>
      </div>
    </>
  )
}

export default JavascriptPrueba
