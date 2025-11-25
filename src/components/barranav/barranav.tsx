import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../assets/menu_12483685.svg";
import { H2, H3 } from "../../pages/telaInicial/telaInicial";
import IconeDuvidas from "../../assets/duvidas.svg";

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
    grid-template-columns: auto auto;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

    @media (max-width: 768px) {
        padding: 0 8px;
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
    margin-right: 16px;
    display: flex;
    align-items: center;       
    gap: 8px; 
    
    text-decoration: none;
    color: #264790;

    white-space: nowrap; 
`


export const Imagem = styled.img`
    width: 15%;
    padding: 20px;
    margin: auto;
`
const BarraNav: React.FC = () => {


    
    const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

    return(
        <>
            <Div>  
                <div style={{display: "grid", gridTemplateColumns:"16% 80%"}}>
                    <Img src={MenuIcon} onClick={toggleMenu}></Img>
                    <H2>Informações e ajuda</H2>
                </div>
                <DivDuvidas href="/DifusaoCultural/duvidas">
                    <H3>Dúvidas Frequentes</H3>
                    <Imagem src={IconeDuvidas}/>
                </DivDuvidas>
                <Div2 menuAberto={menuAberto}>    
                    <UlPrincipal>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/saude', '_self')}>Saúde</LiPrincipal>
                            <ul>
                                <Abarra href="/saude#saude1"><LiSecund>Onde buscar atendimento?</LiSecund></Abarra>
                                <Abarra href="/saude#saude2"><LiSecund>Como ser atendido?</LiSecund></Abarra>
                                <Abarra href="/saude#saude3"><LiSecund>Serviços e tratamentos oferecidos.</LiSecund></Abarra>
                                <Abarra href="/saude#saude4"><LiSecund>Telefones e links úteis.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/educa', '_self')}>Educação</LiPrincipal>
                            <ul>
                                <Abarra href="/educa#educa1"><LiSecund>Como aprender português.</LiSecund></Abarra>
                                <Abarra href="/educa#educa2"><LiSecund>Educação infantil, fundamental e média.</LiSecund></Abarra>
                                <Abarra href="/educa#educa3"><LiSecund>Documentos necessários para realização de matrícula escolar.</LiSecund></Abarra>
                                <Abarra href="/educa#educa4"><LiSecund>Educação para jovens e adultos - EJA.</LiSecund></Abarra>
                                <Abarra href="/educa#educa5"><LiSecund>Revalidação de diplomas estrangeiros.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/naturaliza', '_self')}>Naturalização</LiPrincipal>
                            <ul>
                                <Abarra href="/naturaliza#naturaliza1"><LiSecund>Naturalização ordinária.</LiSecund></Abarra>
                                <Abarra href="/naturaliza#naturaliza2"><LiSecund>Hipóteses de redução de prazo na naturalização ordinária.</LiSecund></Abarra>
                                <Abarra href="/naturaliza#naturaliza3"><LiSecund>Naturalização extraordinária, especial, provisória e naturalização definitiva.</LiSecund></Abarra>
                                <Abarra href="/naturaliza#naturaliza4"><LiSecund>Como solicitar a naturalização.</LiSecund></Abarra>
                                <Abarra href="/naturaliza#naturaliza5"><LiSecund>Documentos mais solicitados.</LiSecund></Abarra>
                                <Abarra href="/naturaliza#naturaliza6"><LiSecund>Regularização migratória.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/assistencia', '_self')}>Assistência Social</LiPrincipal>
                            <ul>
                                <Abarra href="/assistencia#assistencia1"><LiSecund>Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS).</LiSecund></Abarra>
                                <Abarra href="/assistencia#assistencia2"><LiSecund>Rede de Acolhimento.</LiSecund></Abarra>
                                <Abarra href="/assistencia#assistencia3"><LiSecund>Programas sociais do governo.</LiSecund></Abarra>
                                <Abarra href="/assistencia#assistencia4"><LiSecund>Pessoas em situação de rua.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/documentos', '_self')}>Documentação</LiPrincipal>
                            <ul>
                                <Abarra href="/documentos#documentos1"><LiSecund>Registro nacional de estrangeiros (RNE).</LiSecund></Abarra>
                                <Abarra href="/documentos#documentos2"><LiSecund>Carteira de registro nacional migratório (CRNM).</LiSecund></Abarra>
                                <Abarra href="/documentos#documentos3"><LiSecund>Documento provisório de registro nacional migratório - DPRNM.</LiSecund></Abarra>
                                <Abarra href="/documentos#documentos4"><LiSecund>Protocolo de Solicitação de Refúgio.</LiSecund></Abarra>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/DifusaoCultural/orienta', '_self')}>Ajuda e orientação</LiPrincipal>
                            <ul>
                                <Abarra href="/orienta#orienta1"><LiSecund>SJMR (Serviço Jesuíta a Migrantes e Refugiados).</LiSecund></Abarra>
                                <Abarra href="/orienta#orienta2"><LiSecund>Missão paz.</LiSecund></Abarra>
                                <Abarra href="/orienta#orienta3"><LiSecund>ACNUR.</LiSecund></Abarra>
                                <Abarra href="/orienta#orienta4"><LiSecund>Abraço cultural.</LiSecund></Abarra>
                                <Abarra href="/orienta#orienta5"><LiSecund>Defensoria Pública da DPU.</LiSecund></Abarra>
                                <Abarra href="/orienta#orienta5"><LiSecund>Organização Internacional para as Migrações.</LiSecund></Abarra>
                            </ul>
                    </UlPrincipal>   
                </Div2>
            </Div>
        </>
    )
}

export default BarraNav;