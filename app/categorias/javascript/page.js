"use client"

import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import SendButton from "../../_components/sendButton"

const JavascriptPrueba = () => {
  const editorRef = useRef(null)
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
  }

  return (
    <>
      <div>
        <div>JavascriptPrueba</div>
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
            onMount={handleEditorDidMount}
          />
          <div className="text-white">
            <h6>Consola</h6>
            <p>El resultado de tu prueba irá aquí</p>
          </div>
        </div>
        <div className="scriptButtons">
          <SendButton
            className={`scriptButton`}
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
