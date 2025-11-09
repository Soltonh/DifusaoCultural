import styled from "styled-components";
import React from "react";

export const Fundo = styled.div`
    display: grid;
    grid-template-columns: 13vw 75vw;
    width: 100%;
    margin-bottom: auto;
    position: sticky;
    top: 0;
    left: 0;
    padding-top: 3vh;
    background-color: white; 
`


export const Icones = styled.svg`
    width: 5vw;
    height: 5vh;
    color: #264790;
    margin-bottom: 2vh;
`

export const ImagemPag = styled.img<IndicadoPagProps>`
    width: ${({tamanho}) => tamanho};
    filter: brightness(60%);
`

export const Titulo = styled.h1`
    color: #264790;
    font-size: 3rem;
    margin-top: auto;
    margin-bottom: auto;
    
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
                <div style={{marginLeft: '3rem'}}>
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
                </div>
                <Titulo>{titulo}</Titulo>
            </Fundo>
        </>
    )
} 

export default IndicadorPag