import type React from "react";
import { FundoGeral, H2, H3, Imagem, NavBar } from "./telaInicial";
import MenuIcon from "../../assets/menu_12483685.svg";
import IconeDuvidas from "../../assets/message_3968932.svg";

const TelaInicial: React.FC = () => {
    return (
        <FundoGeral>
            <NavBar>
                <Imagem src={MenuIcon}/>
                <H2>Informações e ajuda</H2>
                <H3>Dúvidas Frequentes</H3>
                <Imagem src={IconeDuvidas}/>
            </NavBar> 
        </FundoGeral>
    );
    
}

export default TelaInicial