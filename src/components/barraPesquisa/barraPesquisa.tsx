import type React from "react";
import styled from "styled-components";

export const DivPrincipal = styled.div`
    border: solid 2px black;
    border-radius: 35px;
    width: 60vw;
    margin: 5vh auto 5vh auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 3vw 53vw 3vw;
`

export const Icones = styled.svg`
    width: 3vw;
    height: 3vh;
    color: black;
    transform: scaleX(-1);
`

export const InputPesquisar = styled.input`
    width: 100%;
    height: 100%;
    background-color: white;
    border: none;
    margin: auto;
    color: black;
    font-size: 20px;
    
    &::placeholder{
        color: black;
        font-size: 20px;
    }

    &:focus{
        border: solid white 1px;
    }
`

const BarraPesquisa: React.FC = () => {
    return (
        <>
            <DivPrincipal>
                <Icones 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                fill="none" 
                viewBox="0 0 24 24">
                <path stroke="currentColor" 
                stroke-linecap="round" 
                stroke-width="2" 
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </Icones>
                <InputPesquisar placeholder="O que você procura?"/>
                <Icones
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                fill="none" 
                viewBox="0 0 24 24">
                <path stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18 17.94 6M18 18 6.06 6"/>

                </Icones>
            </DivPrincipal>
        </>
    )
}

export default BarraPesquisa