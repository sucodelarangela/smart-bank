import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
}
`;

// Este arquivo é um arquivo global de reset.
// Por ser global, deverá ser usado em App.js
// Não se recomenda a importação de fontes no GlobalStyle.js. O ideal é que sejam importadas diretamente no HTML

// Ai usar o createGlobalStyle, recebemos como retorno um novo componente estilizado que não possui as restrições de escopo para o CSS que aplicamos nele. Normalmente quando criamos um componente estilizado as regras de CSS que aplicamos nele estão guardadas dentro do escopo daquele componente, dessa forma sabemos que elas não irão interferir com CSS de outros componentes. No caso do createGlobalStyle essa proteção é retirada e assim o CSS dele tem acesso global.