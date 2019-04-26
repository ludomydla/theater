import React from "react";
import Theater from "./components/Theater";

function App() {
  let rows = 10;
  let cols = 20;

  return (
    <div>
      <Theater rows={rows} cols={cols} />
    </div>
  );
}

export default App;
