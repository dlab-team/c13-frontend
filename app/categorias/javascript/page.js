"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import SendButton from "../../_components/sendButton"
import Footer from "@/app/Footer"

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
  <div className="container">
    <div className="text-center my-5">
      <button className="btn btn-dark rounded-0 w-50">Curso</button>
      <button className="btn btn-secondary rounded-0 w-50">Nivel(Básico)</button>
    </div>

    <div className="row">
      <div className="col-md-6" style={{background: '#739e2d'}}>
        <h3 className="m-2">Ejercicio 1: Hola Mundo</h3>
        <p className="m-2"><strong>Objetivo:</strong> Escribe y ejecuta tu primer código en JavaScript para mostrar el mensaje "Hola Mundo"</p>
        <div className="m-2"><strong>Esperado:</strong>
        <ul>
          <li>Deberías ver en la consola el mensaje "Hola Mundo".</li>
          <li>Si ves el mensaje, ¡felicidades! Has completado tu primer programa en JavaScript.</li>
        </ul>
        <div className="container bg-white">
        <p style={{height: '100px'}}>*Tip por si hay un error en tu respuesta</p>
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
          height="60vh"
          options={{
            fontSize: "16px",
          }}
          onChange={(value) => setEjercicio(value)}
          onMount={handleEditorDidMount}
        />
        <div className="text-white bg-dark">
          <h6>Consola</h6>
          <p>El resultado de tu prueba irá aquí</p>
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