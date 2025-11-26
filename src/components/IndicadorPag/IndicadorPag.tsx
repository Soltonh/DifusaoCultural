import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const Fundo = styled.div`
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(10,1fr);
    width: 100vw;
    min-height: 13vh;
    max-height: 18vh;
    position: sticky;
    padding: 1.3rem 1rem 2rem;
    margin-bottom: 3rem;
    background-color: #b3c8f5ff; 
    gap: clamp(16px, 4vw, 40px);
    box-sizing: border-box;

    /* tablet */
    @media (max-width: 980px) {
        grid-template-columns: repeat(6, 1fr);
    }
`

export const Icones = styled.svg`
    width: clamp(16px, 3vw, 28px);
    height: auto;
    color: #264790;
    margin: auto;

`

export const ImagemPag = styled.img<IndicadoPagProps>`
    width: clamp(40px, 8vw, 70px);  /* cresce/diminui conforme a tela */
    height: auto;
    filter: grayscale(50%);
    color: #264790;
    margin: auto auto auto 2rem;

    @media (max-width: 600px) {
        margin: 0 auto; /* centraliza no mobile */
    }
`

export const Titulo = styled.h1`
    color: #264790;
    font-size: 3rem;
    margin: auto auto auto 0;
    text-align: left;
    grid-column: 2/10;

    @media (max-width: 980px) {
        font-size: 2rem;
        grid-column: 2 / 6;
    }
    
    @media (max-width: 425px) {
        font-size: 1.5rem;
    }

`

export const Home = styled(Link)`
    background-color: #264790;
    width: 7vh; 
    height: 3vw;
    margin: auto;
    display: flex;                
    align-items: center;
    justify-content: center;  
    border-radius: 1rem;
    font-size: 1.2rem;

    &:hover{
        background-color: white;
    }

    @media (max-width: 1300px) {
        width: 7vh; 
        height: 5vw;
    }
`

export const DivIconImg = styled.div`
    display: grid;
    grid-template-columns: auto auto; /* imagem + seta */
    align-items: center;
    column-gap: clamp(8px, 2vw, 30px);
    grid-column: 1 / 2;

`
interface IndicadoPagProps {
    src?: string;
    tamanho?: string;
    titulo?: string;
}

export const IndicadorPag: React.FC<IndicadoPagProps> = ({src, tamanho, titulo}) =>{
    return (
        <>
            <Fundo>
                <DivIconImg>
                    <ImagemPag src={src} tamanho={tamanho}></ImagemPag>
                    <Icones 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" 
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/> 
                    </Icones>
                </DivIconImg>
                <Titulo>{titulo}</Titulo>
                <Home to="/">
                    <Icones style={{margin: "auto", color: "#b3c8f5ff"}}
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" 
                        viewBox="0 0 24 24">
                        <path 
                        fill-rule="evenodd" 
                        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" 
                        clip-rule="evenodd" />
                    </Icones>
                </Home>
            </Fundo>
        </>
    )
} 

export default IndicadorPag