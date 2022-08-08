import React from "react";

import styled from 'styled-components';

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

// para evitar erros com componente e estilos usando mesmo nome de variável, vamos transformar o componente abaixo em uma função anônima
// const Container = () => {
export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
// Uma outra solução seria renomear o componente de Container para ContainerWrapper, por exemplo

// este export pode ser excluído
// export default Container;
