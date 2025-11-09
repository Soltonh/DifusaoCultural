import type React from "react";
import styled from "styled-components";

interface SanfonaTextosProps{
    titulo?: string;
    texto?: string;
}

export const Divsanfona = styled.div`
    margin-top: 5vh;
`


export const BotaoSanfona = styled.button`
    width: 100%;
    background-color: white;
    border: 2px solid black;
    color: black;
    text-align: left;
    font-size: 1.5rem; 
    position: relative;

    &::after {
        content: "➜";
        margin-left: 80%;
        transform: rotate(-40%);
        font-size: 2rem;
    }
`


export const SanfonaTextos: React.FC<SanfonaTextosProps> = ({titulo, texto}) => {
    return(
        <>
            <Divsanfona>
                <BotaoSanfona>{titulo}</BotaoSanfona>
                <a>{texto}</a>
            </Divsanfona>
        </>
    )
}

export default SanfonaTextos