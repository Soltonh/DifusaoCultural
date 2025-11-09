import type React from "react";
import Saudeimg from "../../assets/saude.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, Paragrafo } from "./saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";

const TelaSaude: React.FC = () => {
    return (
        <>
            <IndicadoPag src={Saudeimg} tamanho="5vw" titulo="Saúde no Brasil"></IndicadoPag>
            <DivTextos>
                <Paragrafo>
                    No Brasil, todas as pessoas têm direito à saúde gratuita e de 
                    qualidade, mesmo que não sejam brasileiras. Isso significa que ninguém pode 
                    ser impedido de ser atendido em hospitais e postos de saúde públicos, mesmo 
                    sem documentos ou situação migratória regular.
                </Paragrafo>
                <br/>
                <Paragrafo>
                    O sistema público de saúde brasileiro é chamado de SUS – Sistema Único
                    de Saúde, e ele é universal, gratuito e igualitário.
                </Paragrafo>
                <SanfonaTextos titulo="Onde buscar atendimento?">

                </SanfonaTextos>
            </DivTextos>
        </>
    );
    
}

export default TelaSaude