// arquivo para fazer a transição entre dark e light theme. A criação deste arquivo é para facilitar a manutenção dos temas: quando precisarmos alterar algo, alteraremos apenas no arquivo de variáveis
import { fundoClaro, conteudoClaro, textoFundoClaro, fundoEscudo, conteudoEscuro, textoFundoEscudo } from './variaveis';

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro
};

export const temaEscuro = {
    body: fundoEscudo,
    inside: conteudoEscuro,
    text: textoFundoEscudo
};