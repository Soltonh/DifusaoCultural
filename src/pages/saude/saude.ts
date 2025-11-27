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