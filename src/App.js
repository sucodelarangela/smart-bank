import React from "react";
// importando o Theme Provider para mudar os temas
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

// importando estilos globais
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    // usando o Theme Provider, abraçando todo o conteúdo
    <ThemeProvider theme={temaEscuro}>
      {/* usando estilos globais */}
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
