import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
// importando styled-components
import styled from 'styled-components';
// importando variáveis
import { corPrimaria } from '../UI/variaveis';

// criando styled buttons com cores de fundo diferentes
// para definir as cores, podemos usar um operador ternário dentro de uma interpolação e usar props
const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${(props) => props.primary ? 'white' : corPrimaria};
  color: ${(props) => props.primary ? corPrimaria : 'white'}
`;

// criando styled-component para o cabeçalho
// variáveis são interpoladas com ${}
const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        {/* Neste styled-component colocaremos a prop 'primary', que fará a diferenciação de estilo entre os botões */}
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
