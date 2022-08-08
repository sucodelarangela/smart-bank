// importing styled-components
import styled from 'styled-components';

// quando usamos 'styled.', temos acesso à todas as tags html para estilização
// os estilos do styled-components são feitos através de template literals ``
const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
  `;

// se não deletarmos o componente funcional abaixo, nossa aplicação dará um erro de redeclaração de variável
// se deletarmos o componente, nossa aplicação funcionará normalmente, pois o styled-components entende que a tag h1 vai receber um conteúdo children vindo de um elemento-pai. Nesse caso, "Olá, Fulano!".
// Logo, este componente é específico apenas para estilização

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };
export default Titulo;
