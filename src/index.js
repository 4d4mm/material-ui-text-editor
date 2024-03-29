import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { HTMLEditor } from "./HTMLEditor";

function App() {
  return (
    <div className="App">
      <h2>Default HTML editor</h2>
      <HTMLEditor />
      <h2>Overriden formatting options</h2>
      <HTMLEditor
        config={{
          toolbar: ["h1", "h2", "bold", "italic", "link", "image", "video"]
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
