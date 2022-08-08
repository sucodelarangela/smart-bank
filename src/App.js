import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

// importando estilos globais
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      {/* usando estilos globais */}
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
