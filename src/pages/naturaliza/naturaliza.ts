import styled from "styled-components";

export const TabelaCentral = styled.table`
    width: 90vw;
    margin: auto;
    color: black;
    padding: 3rem;

    & th {
        text-align: center;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: solid 1px black;

        @media (max-width:980px){
            font-size: 1rem;
        }

        @media (max-width:425px){
            
            font-size: 0.6rem;
        }
    }

    & td {
        text-align: center;
        font-size: 1.2rem;
        padding: 0.5rem;
        border: solid 1px black;

        @media (max-width:980px){
            font-size: 1rem;
        }

        @media (max-width:425px){
            padding: 0rem;
            font-size: 0.6rem;
        }
    }
    
    @media (max-width:425px){
        width: 100%;
    }
`

export const TextoLink = styled.a`
    color: black;
    text-decoration: underline;
    overflow-wrap: anywhere;
    word-wrap: break-word; 
    word-break: break-all;

    &:hover{
        color: blue;
    }

    @media (max-width:980px){
        font-size: 1.5rem;
    }

    @media (max-width:425px){
        font-size: 1rem;
    }
`