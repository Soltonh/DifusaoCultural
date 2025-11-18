import type React from "react";
import { FundoGeral, H1, H2, H3, Imagem, NavBar, QuadradosSec } from "./telaInicial";
import MenuIcon from "../../assets/menu_12483685.svg";
import IconeDuvidas from "../../assets/message_3968932.svg";
import BarraPesquisa from '../../components/barraPesquisa/barraPesquisa'
import BlocoTelaInicial from "../../components/BlocoTelaInicial/BlocoTelaInicial";
import saude from "../../assets/saude.png"
import educa from "../../assets/educacao.png"
import bemestar from "../../assets/bemestar.png"
import assisocial from "../../assets/assissocial.png"
import documento from "../../assets/documentos.png"
import orientacao from "../../assets/orientacao.png"

const TelaInicial: React.FC = () => {
    return (
        <FundoGeral>
            <NavBar>
                <Imagem src={MenuIcon}/>
                <H2>Informações e ajuda</H2>
                <H3>Dúvidas Frequentes</H3>
                <Imagem src={IconeDuvidas}/>
            </NavBar> 
            <BarraPesquisa/>
            <H1>Aqui você encontra informações sobre:</H1>
            <QuadradosSec>
                <BlocoTelaInicial legenda="Saúde" src={saude} tamanho="6.5vw" to="/saude"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Educação" src={educa} tamanho="6.5vw" to="/educa"/>
                <BlocoTelaInicial legenda="Naturalização" src={bemestar} tamanho="6.5vw" to="/naturaliza"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Assistência Social" src={assisocial} tamanho="6.5vw" to="/assistencia"/>
                <BlocoTelaInicial legenda="Documentação" src={documento} tamanho="6.5vw"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Ajuda e orientação" src={orientacao} tamanho="6.5vw"/>
            </QuadradosSec>
        </FundoGeral>
    );
    
}

export default TelaInicial