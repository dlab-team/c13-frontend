"use client";

import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import SqlExecuter from "./_exercises/sqlExecuter";
import SendButton from "./sendButton";

export default function WorkSpace({ exercise }) {
  const [toExecute, setToExecute] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.setValue("");
  //   }
  // }, [exercise]);


  return (
    <>
      <div className="boxEditor">
        <Editor
          id="inputTexto"
          type="text"
          name="query"
          theme="vs-dark"
          defaultLanguage="sql"
          height="20vh"
          width="100%"
          options={{
            fontSize: "16px",
          }}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="queryButtons">
        <SendButton
          className={`queryButton`}
          type="submit"
          onClick={() => setToExecute(true)}
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
    </>
  );
}
