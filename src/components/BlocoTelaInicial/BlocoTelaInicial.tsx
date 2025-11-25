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
  navegar: string;
}

interface IconeInicialProps {
  tamanho?: string;
}

export const Quadrado = styled(Link)<QuadradoProps>`
    background-color: ${({ cor }) => cor || '#DCF4CE'};
    display: grid;
    grid-template-rows: auto 1fr;
    justify-items: center;
    align-items: center;
    padding: 30px;

    width: 100%;
    height: 100%;
    max-width: 520px; 

    @media (max-width: 768px) {
        max-width: 240px;
        padding: 12px;
    }
`

export const H4Bloco = styled.h4<H4BlocoProps>`
    color: #264790;
    text-align: center;
    margin-top: 2rem;
`

export const IconeInicial = styled.img<IconeInicialProps>`
    width: ${({ tamanho }) => tamanho || '6.8vw'};
    max-width: 180px;
    min-width: 48px;

    height: auto;
    margin: 0 auto;
    display: block;

    background-color: #fff;
    border-radius: 35px;
    padding: clamp(10px, 2vw, 22px);
`

const BlocoTelaInicial: React.FC<BlocoTelaInicialProps> = ({cor, legenda, src, tamanho, navegar}) => {
    return(
        <>
            <Quadrado cor={cor} to={navegar}>
                <IconeInicial src={src} tamanho={tamanho}></IconeInicial>
                <H4Bloco>{legenda}</H4Bloco>
            </Quadrado>
        </>
    )
}

export default BlocoTelaInicial