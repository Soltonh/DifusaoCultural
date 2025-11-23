import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../assets/menu_12483685.svg";
import { DivDuvidas, H2, H3, Imagem } from "../../pages/telaInicial/telaInicial";
import IconeDuvidas from "../../assets/duvidas.svg";

export const Img = styled.img`
    width: 50%;
    margin: auto;
    cursor: pointer;
    
    @media (max-width: 768px) {
        width: 80%;
        margin: auto;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: auto;
    }
`

export const Div = styled.div`
    width: 99vw;
    height: 7vh;
    display: grid;
    grid-template-columns: 6vw 65vw 25vw;
    position: sticky;
    top: 0;
    z-index:999;
    box-shadow: white;
    gap: 20px;

    @media (max-width: 768px) {
        height: 10vh;
    }

    @media (max-width: 480px) {
    padding: 0.5rem;
    }
`
export const Div2 = styled.div<{ menuAberto: boolean }>`
    overflow-x: hidden;
    width: 40vw;
    height: 89.2vh;
    overflow-y: scroll;
    background-color:#264790 ;
    position: sticky;
    top: 0;
    z-index: 9999;
    transition: transform 1s ease;
    transform: ${({ menuAberto }) => 
    menuAberto ? "translateX(0)" : "translateX(-100%)"};
    margin-top: -1rem;

    @media (max-width: 1200px) {
        width: 17vw;
        margin-top: 4.6%;
    }

    @media (max-width: 1024px) {
        width: 17vw;
        margin-top: 5.4%;
    }
    
    @media (max-width: 768px) {
        width: 25vw;
        margin-top: 10.3%;
    }

    @media (max-width: 480px) {
        width: 40vw;
        margin-top: 16.4%;
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
    margin: auto;
    width: 100%;
    list-style-type: none;
    margin-left: 2%;    
`
export const LiPrincipal = styled.li`
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
    font-size: 18px;
    font-weight: bold;
    margin-left: 5%;
    list-style-type: none;
    cursor: pointer;
    padding-left: 6px;
    border-radius: 10px 0px 10px 0px;
    width: 35vw;
    color: black;

    &:hover{
        background-color: white;
        color: black;
    }
`

export const Abarra = styled.a`
    color: white;

    &:hover{
        background-color: white;
        color: black;
    }
`

const BarraNav: React.FC = () => {


    
    const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

    return(
        <>
            <Div>
                <Img src={MenuIcon} onClick={toggleMenu}></Img>
                <H2>Informações e ajuda</H2>
                <DivDuvidas href="/duvidas">
                    <H3>Dúvidas Frequentes</H3>
                    <Imagem src={IconeDuvidas}/>
                </DivDuvidas>
                <Div2 menuAberto={menuAberto}>    
                    <UlPrincipal>
                        <LiPrincipal onClick={() => window.open('/saude', '_self')}>Saúde</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/saude#saude1">Onde buscar atendimento?</Abarra></LiSecund>
                                <LiSecund><Abarra href="/saude#saude2">Como ser atendido?</Abarra></LiSecund>
                                <LiSecund><Abarra href="/saude#saude3">Serviços e tratamentos oferecidos.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/saude#saude4">Telefones e links úteis.</Abarra></LiSecund>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/educa', '_self')}>Educação</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/educa#educa1">Como aprender português.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/educa#educa2">Educação infantil, fundamental e média.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/educa#educa3">Documentos necessários para realização de matrícula escolar.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/educa#educa4">Educação para jovens e adultos - EJA.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/educa#educa5">Revalidação de diplomas estrangeiros.</Abarra></LiSecund>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/naturaliza', '_self')}>Naturalização</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/naturaliza#naturaliza1">Naturalização ordinária.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/naturaliza#naturaliza2">Hipóteses de redução de prazo na naturalização ordinária.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/naturaliza#naturaliza3">Naturalização extraordinária, especial, provisória e naturalização definitiva.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/naturaliza#naturaliza4">Como solicitar a naturalização.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/naturaliza#naturaliza5">Documentos mais solicitados.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/naturaliza#naturaliza6">Regularização migratória.</Abarra></LiSecund>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/assistencia', '_self')}>Assistência Social</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/assistencia#assistencia1">Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS).</Abarra></LiSecund>
                                <LiSecund><Abarra href="/assistencia#assistencia2">Rede de Acolhimento.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/assistencia#assistencia3">Programas sociais do governo.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/assistencia#assistencia4">Pessoas em situação de rua.</Abarra></LiSecund>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/documentos', '_self')}>Documentação</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/documentos#documentos1">Registro nacional de estrangeiros (RNE).</Abarra></LiSecund>
                                <LiSecund><Abarra href="/documentos#documentos2">Carteira de registro nacional migratório (CRNM).</Abarra></LiSecund>
                                <LiSecund><Abarra href="/documentos#documentos3">Documento provisório de registro nacional migratório - DPRNM.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/documentos#documentos4">Protocolo de Solicitação de Refúgio.</Abarra></LiSecund>
                            </ul>
                        <LiPrincipal onClick={() => window.open('/orienta', '_self')}>Ajuda e orientação</LiPrincipal>
                            <ul>
                                <LiSecund><Abarra href="/orienta#orienta1">SJMR (Serviço Jesuíta a Migrantes e Refugiados).</Abarra></LiSecund>
                                <LiSecund><Abarra href="/orienta#orienta2">Missão paz.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/orienta#orienta3">ACNUR.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/orienta#orienta4">Abraço cultural.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/orienta#orienta5">Defensoria Pública da DPU.</Abarra></LiSecund>
                                <LiSecund><Abarra href="/orienta#orienta5">Organização Internacional para as Migrações.</Abarra></LiSecund>
                            </ul>
                    </UlPrincipal>   
                </Div2>
            </Div>
        </>
    )
}

export default BarraNav;