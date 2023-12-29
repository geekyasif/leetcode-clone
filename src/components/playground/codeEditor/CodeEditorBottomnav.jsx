import React from "react";


function CodeEditorBottomnav({
  handleRunCode,
  loading,
}) {
  return (
    <div className="fixed bottom-0 bg-white text-right p-2 w-[50%]">
      <button
        onClick={handleRunCode}
        className="bg-green-600 rounded text-white px-4 py-2 "
      >
        {loading ? "loading..." : "Run"}
      </button>
    </div>
  );
}

export default CodeEditorBottomnav;
