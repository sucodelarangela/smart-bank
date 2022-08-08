// criando uma função para atribuir um ícone dinamicamente de acordo com o item do extrato
import React from "react";
import { Icone } from "./UI";

import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';

export default (type) => {
    // usando Object Literals para retornar os ícones
    const Images = {
        Restaurante: <Icone src={alimentacao} alt='Restaurante' />,
        Utilidades: <Icone src={utilidades} alt='Utilidades' />,
        Saude: <Icone src={saude} alt='Saúde' />,
        Transporte: <Icone src={transporte} alt='Transporte' />,
        default: <Icone src={outros} alt='Outros' />
    };

    return Images[type] || Images.default;
};