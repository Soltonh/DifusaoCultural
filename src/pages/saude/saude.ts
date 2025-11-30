import styled from "styled-components";

export const DivTextos = styled.div`
    width: 90vw;
    margin: auto auto auto auto;  
    padding-bottom: 3rem;
`;

export const Paragrafo = styled.p`
    font-size: 1.9rem;
    color: black;

    @media (max-width:980px){
        font-size: 1.5rem;
    }
    @media (max-width:425px){
        font-size: 1.1rem;
    }
`;

export const ParagrafoConteudo = styled.li`
    font-size: 1.8rem;
    color: black;
    padding-bottom: 0.7rem;
    margin-left: 3rem;
    font-weight: normal;

    @media (max-width:980px){
        font-size: 1.5rem;
    }
    @media (max-width:425px){
        font-size: 1rem;
    }
`;

export const ParagrafoConteudoLink = styled.p`
    font-size: 1.8rem;
    color: black;
    padding-bottom: 1rem;
    text-decoration: underline;
    font-weight: 400;
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
`;

export const ParagrafoConteudoTexto = styled.p`
    font-size: 1.8rem;
    color: black;
    padding-bottom: 1rem;

    @media (max-width:980px){
        font-size: 1.5rem;
    }

    @media (max-width:425px){
        font-size: 1rem;
    }
`;

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #ffffffff;

    @media (max-width:980px){
        font-size: 1.5rem;
    }
    
    @media (max-width:425px){
        font-size: 1rem;
    }
`;

export const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: bold;
    color: #000000ff;
    padding-bottom: 1rem;

    @media (max-width:980px){
        font-size: 1.5rem;
    }
    
    @media (max-width:425px){
        font-size: 1rem;
    }
`;

export const DivVideos = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin: auto;
    width: 80%;
    gap: 50px;

    @media (max-width:1200px){
        width: 80%;
    }
    @media (max-width:768px){
        width: 100%;
    }
    @media (max-width:680px){
        width: 100%;
        grid-template-columns: repeat(1,1fr);
    }
    
    & h3{
        padding: 20px;
        margin: auto;

        @media (max-width:1200px){
            font-size: 15px;
        }
    }
    & div{
        display: grid;
        grid-template-columns: repeat(1,1fr);

        @media (max-width:680px){
            width: 100%;
            grid-template-columns: repeat(1,1fr);
            gap: 20px;
            margin: auto;
        }
    }

    & iframe{
        box-shadow: 10px black;
        max-width: 450px; 
        min-width: 400px;
        max-height: 850px;
        min-height: 650px;
        margin: auto;

        @media (max-width:1200px){
            max-width: 250px; 
            max-height: 550px;
            min-width: 300px;
            min-height: 550px;
        }
        @media (max-width:980px){
            max-width: 250px; 
            max-height: 550px;
            min-width: 250px;
            min-height: 450px;
        }
        @media (max-width:768px){
            max-width: 250px; 
            max-height: 450px;
        }
        @media (max-width:680px){
            max-width: 200px; 
            max-height: 400px;
            min-width: 220px;
            min-height: 450px;
        }
        
    }

    & img{
        max-width: 100px;
        max-height: 100px;
        padding: 20px;
        margin: auto;
    }
`
