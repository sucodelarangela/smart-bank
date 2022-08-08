import React, { useState } from "react";
// importando o Theme Provider para mudar os temas
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

// importando estilos globais
import { GlobalStyle } from "./Components/GlobalStyle";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  // criando um state para salvar o estado do tema atual
  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema);
  };

  return (
    // usando o Theme Provider, abraçando todo o conteúdo
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      {/* usando estilos globais */}
      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <SwitchTheme tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
