import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const extensions = [javascript({ jsx: true })];


function CodeEditor({ code, setCode }) {
  const handleCode = (val) => {
    setCode(val);
  };

  return (
    <div className="md:w-[50vw] lg:w-[50vw]">
      <CodeMirror
        value={code}
        height="100vh"
        width="100%"
        theme={dracula}
        extensions={extensions}
        onChange={handleCode}
      />
    </div>
  );
}

export default CodeEditor;
