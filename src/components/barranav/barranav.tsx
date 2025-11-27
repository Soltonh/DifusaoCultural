import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../assets/menu_12483685.svg";
import { H2, H3 } from "../../pages/telaInicial/telaInicial";
import IconeDuvidas from "../../assets/duvidas.svg";
import { useNavigate } from "react-router-dom";

export const Img = styled.img`
    width: clamp(24px, 4vw, 40px);
    height: auto;

    margin: auto 0 auto 40px;  /* centraliza verticalmente e dá um espacinho à esquerda */
    cursor: pointer;
    display: block;
`

export const Div = styled.div`
    background-color: #DCF4CE;
    width: 100%;
    min-height: 6rem;
    max-height: 6rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

    @media (max-width: 1366px) {
        grid-template-columns: 60% 30%;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 55% 30%;
    }
    @media (max-width: 980px) {
        grid-template-columns: 50% 30%;
    }
    @media (max-width: 700px) {
        grid-template-columns: 45% 30%;
    }
    @media (max-width: 580px) {
        grid-template-columns: repeat(1,1fr);
        min-height: 10rem;
        max-height: 10rem;
        padding-top: 2rem;
    }
`
export const Div2 = styled.div<{ menuAberto: boolean }>`
    background-color: #DCF4CE;

    position: absolute;    /* agora relativo ao Div */
    top: 100%;             /* começa logo abaixo do Div */
    left: 0;

    width: 100%;
    max-width: 850px;
    max-height: 89.6vh;

    overflow-x: hidden;
    transition: transform 0.3s ease;
    transform: ${({ menuAberto }) =>
        menuAberto ? "translateX(0)" : "translateX(-100%)"};
    z-index: 998;          /* fica abaixo da barra, mas acima do conteúdo */

    @media (max-width: 480px) {
        width: 100vw;
        max-width: 100vw;
    }

`

export const H1 = styled.h1`
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;  
    font-size: 150%;
    
`
export const UlPrincipal = styled.ul`
    color: black;
    margin: auto;
    width: 100%;
    list-style-type: none;
    margin-left: 2%;    
`
export const LiPrincipal = styled.li`
    width: 90%;  
    font-size: 25px;
    font-weight: bold;
    margin: 1rem;
    border-radius: 10px 0px 10px 0px;;

    &:hover{
        background-color: white;
        color: black;
    }
    
`

export const LiSecund = styled.li`
    color:black;
    font-size: 18px;
    font-weight: bold;
    margin-left: 5%;
    list-style-type: none;
    cursor: pointer;
    padding-left: 6px;
    border-radius: 10px 0px 10px 0px;
    width: 90%;  
    &:hover{
        background-color: white;
        color: black;
    }
`

export const Abarra = styled.a`
    
    &:hover{
        background-color: white;
        color: black;
    }
`

export const IconeDuvida = styled.svg`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`

export const DivDuvidas = styled.a`
    justify-self: end;
    width: 50%;
    margin: auto 0px auto  auto;
    display: grid;
    grid-template-columns: 65% 10%;
    display: flex;
    align-items: center;       
    gap: 8px; 
    
    text-decoration: none;
    color: #264790;

    white-space: nowrap; 

    @media (max-width: 500px) {
        grid-template-columns: 60% 20%;
    }

    @media (max-width: 580px) {
        margin: auto;
    }
`


export const Imagem = styled.img`
    width: 100%;
    max-width: 90px;
    min-width: 60px;
    padding: 20px;
    margin: auto;
`

export const DivMenu = styled.div`
    display: grid;
    grid-template-columns: 13% 80%;
    
    @media (max-width: 1366px){
        grid-template-columns: 18% 80%;
    }
    @media (max-width: 980px){
        grid-template-columns: 22% 80%;
    }
    @media (max-width: 768px){
        grid-template-columns: 30% 80%;
    }
    @media (max-width: 580px) {
        width: 75%;
        grid-template-columns: 30% 65%;
        margin: auto;
    }
`
const BarraNav: React.FC = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

    return(
        <>
            <Div>  
                <DivMenu>
                    <Img src={MenuIcon} onClick={toggleMenu}></Img>
                    <H2>Informações e ajuda</H2>
                </DivMenu>
                <DivDuvidas onClick={() => navigate("/duvidas")}>
                    <H3>Dúvidas Frequentes</H3>
                    <Imagem src={IconeDuvidas}/>
                </DivDuvidas>
                <Div2 menuAberto={menuAberto}>    
                    <UlPrincipal>
                        <LiPrincipal onClick={() => navigate('/saude')}>Saúde</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/saude#saude1")}><LiSecund>Onde buscar atendimento?</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/saude#saude2")}><LiSecund>Como ser atendido?</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/saude#saude3")}><LiSecund>Serviços e tratamentos oferecidos.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/saude#saude4")}><LiSecund>Telefones e links úteis.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => navigate('/educa')}>Educação</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/educa#educa1")}><LiSecund>Como aprender português.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/educa#educa2")}><LiSecund>Educação infantil, fundamental e média.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/educa#educa3")}><LiSecund>Documentos necessários para realização de matrícula escolar.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/educa#educa4")}><LiSecund>Educação para jovens e adultos - EJA.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/educa#educa5")}><LiSecund>Revalidação de diplomas estrangeiros.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => navigate('/naturaliza')}>Naturalização</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza1")}><LiSecund>Naturalização ordinária.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza2")}><LiSecund>Hipóteses de redução de prazo na naturalização ordinária.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza3")}><LiSecund>Naturalização extraordinária, especial, provisória e naturalização definitiva.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza4")}><LiSecund>Como solicitar a naturalização.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza5")}><LiSecund>Documentos mais solicitados.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/naturaliza#naturaliza6")}><LiSecund>Regularização migratória.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => navigate('/assistencia')}>Assistência Social</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/assistencia#assistencia1")}><LiSecund>Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS).</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/assistencia#assistencia2")}><LiSecund>Rede de Acolhimento.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/assistencia#assistencia3")}><LiSecund>Programas sociais do governo.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/assistencia#assistencia4")}><LiSecund>Pessoas em situação de rua.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => navigate('/documentos')}>Documentação</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/documentos#documentos1")}><LiSecund>Registro nacional de estrangeiros (RNE).</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/documentos#documentos2")}><LiSecund>Carteira de registro nacional migratório (CRNM).</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/documentos#documentos3")}><LiSecund>Documento provisório de registro nacional migratório - DPRNM.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/documentos#documentos4")}><LiSecund>Protocolo de Solicitação de Refúgio.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => navigate('/orienta')}>Ajuda e orientação</LiPrincipal>
                            <ul>
                                <Abarra onClick={() => navigate("/orienta#orienta1")}><LiSecund>SJMR (Serviço Jesuíta a Migrantes e Refugiados).</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/orienta#orienta2")}><LiSecund>Missão paz.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/orienta#orienta3")}><LiSecund>ACNUR.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/orienta#orienta4")}><LiSecund>Abraço cultural.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/orienta#orienta5")}><LiSecund>Defensoria Pública da DPU.</LiSecund></Abarra>
                                <Abarra onClick={() => navigate("/orienta#orienta5")}><LiSecund>Organização Internacional para as Migrações.</LiSecund></Abarra>
                            </ul>
                    </UlPrincipal>   
                </Div2>
            </Div>
        </>
    )
}

export default BarraNav;