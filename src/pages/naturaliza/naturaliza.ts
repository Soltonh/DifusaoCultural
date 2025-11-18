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
    }

    & td {
        text-align: center;
        font-size: 1.2rem;
        padding: 0.5rem;
        border: solid 1px black;
    }
`

export const TextoLink = styled.a`
    color: black;

    &:hover{
        color: blue;
    }
`