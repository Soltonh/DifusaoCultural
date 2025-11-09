import type React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface QuadradoProps{
    cor?: string;
}

interface H4BlocoProps{
    legenda?: string; 
}

interface BlocoTelaInicialProps {
  cor?: string;
  legenda?: string; 
  src?: string;
  tamanho?: string;
  to?: string;
}

interface IconeInicialProps {
  tamanho?: string;
}

export const Quadrado = styled(Link)<QuadradoProps>`
    width: 15vw;
    height: 25vh;
    background-color: ${({cor}) => cor || '#DCF4CE'};
    display: grid;
    grid-template-columns: repeat(1,1fr);
    padding-top: 35px;
`

export const H4Bloco = styled.h4<H4BlocoProps>`
    color: #264790;
    text-align: center;
`

export const IconeInicial = styled.img<IconeInicialProps>`
    width: ${({tamanho}) => tamanho};
    margin: auto;
    background-color: white;
    border-radius: 35px;
    padding: 28px;
`

const BlocoTelaInicial: React.FC<BlocoTelaInicialProps> = ({cor, legenda, src, tamanho, to}) => {
    return(
        <>
            <Quadrado cor={cor} to={to}>
                <IconeInicial src={src} tamanho={tamanho}></IconeInicial>
                <H4Bloco>{legenda}</H4Bloco>
            </Quadrado>
        </>
    )
}

export default BlocoTelaInicial