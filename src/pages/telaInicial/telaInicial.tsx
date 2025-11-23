import type React from "react";
import {FundoGeral, H1, NavBar, QuadradosSec } from "./telaInicial";
import BarraPesquisa from '../../components/barraPesquisa/barraPesquisa'
import BlocoTelaInicial from "../../components/BlocoTelaInicial/BlocoTelaInicial";
import saude from "../../assets/saude.png"
import educa from "../../assets/educacao.png"
import bemestar from "../../assets/bemestar.png"
import assisocial from "../../assets/assissocial.png"
import documento from "../../assets/documentos.png"
import orientacao from "../../assets/orientacao.png"
import BarraNav from "../../components/barranav/barranav";

const TelaInicial: React.FC = () => {
    return (
        <FundoGeral>
            <NavBar>
                <BarraNav />
            </NavBar> 
            <BarraPesquisa/>
            <H1>Aqui você encontra informações sobre:</H1>
            <QuadradosSec>
                <BlocoTelaInicial legenda="Saúde" src={saude} tamanho="6.5vw" to="/saude"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Educação" src={educa} tamanho="6.5vw" to="/educa"/>
                <BlocoTelaInicial legenda="Naturalização" src={bemestar} tamanho="6.5vw" to="/naturaliza"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Assistência Social" src={assisocial} tamanho="6.5vw" to="/assistencia"/>
                <BlocoTelaInicial legenda="Documentação" src={documento} tamanho="6.5vw" to="/documentos"/>
                <BlocoTelaInicial cor="#99E17A" legenda="Ajuda e orientação" src={orientacao} tamanho="6.5vw" to="/orienta"/>
            </QuadradosSec>
        </FundoGeral>
    );
    
}

export default TelaInicial