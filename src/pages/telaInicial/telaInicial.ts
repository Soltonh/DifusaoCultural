import styled from "styled-components";


export const FundoGeral = styled.div`
    min-width: 100vw;
    min-height: 100vh;

     @media (max-width: 780px){
        min-height: 110vh;
        min-width: 110vw;
    }
`

export const NavBar = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
`


export const H2 = styled.h2`
    color: #264790;
    font-weight: bold;
    font-size: 30px;

    @media (max-width: 768px){
        font-size: 25px;
    }
    @media (max-width: 425px){
        font-size: 15px;
    }
`

export const H3 = styled.h3`
    color: black;
    font-weight: 400;
    margin: auto;
    font-size: 2vw;
`

export const H1 = styled.h1`
    color: #264790;
    font-size: 30px;
    width: 80vw;
    margin: auto;

    @media (max-width: 600px){
        text-align: center
    }
`

export const QuadradosSec = styled.section`
    min-width: 50vw;
    max-width: 80vw;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin: auto;
    padding: 40px;

    @media (max-width: 600px){
        min-width: 100vw;
        grid-template-columns: repeat(2,1fr);
        gap: 10px;
    }

`

