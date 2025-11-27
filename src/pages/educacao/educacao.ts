import styled from "styled-components";

export const A = styled.a`
    color: black;
    font-Weight:bold;

    &:hover{
        color: black;
    }
`

export const ParagrafoLinkPonto = styled.li`
    font-size: 1.8rem;
    color: black;
    padding-bottom: 1rem;
    text-decoration: underline;
    font-weight: 400;

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

export const Numerada = styled.ol`
    padding: 1rem;
`