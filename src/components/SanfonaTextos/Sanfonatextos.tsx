import React from "react";
import styled from "styled-components";

type Item = {id: string, titulo: React.ReactNode; conteudo: React.ReactNode}


export const DivGeral = styled.div`
    display: grid;
    padding-top: 2rem;
`;

export const Detalhes = styled.details`
    border: 1px solid #264790;
    border-radius: 12px;
    background: #fff;
    overflow: hidden;

    &[open] ${'' /* gira a setinha quando abre */} span[aria-hidden] {
        transform: rotate(180deg);
    }
`

const Summary = styled.summary`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr auto;
  cursor: pointer;
  user-select: none;
  background-color: #264790;
  padding-right: 2rem;

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 10px;
  }

  /* esconde o marcador padrão do summary */
  &::-webkit-details-marker { display: none; }
`;

const Titulo = styled.span`
  font-weight: 600;
  padding: 1rem;
`;

const Seta = styled.span`
  transition: transform 500ms ease;
  font-size: 3rem;
  color:#ffffff;
`;

const Painel = styled.div`
  color: #374151;
  padding: 2rem;
`;

export function SanfonaTextos({items}: {items: Item[]}){
    return (
        <>
            <DivGeral>
                {items.map((it) => (
                    <Detalhes key={it.id}>
                        <Summary>
                            <Titulo>{it.titulo}</Titulo>
                            <Seta aria-hidden>▾</Seta>
                        </Summary>
                        <Painel>{it.conteudo}</Painel>
                    </Detalhes>
                ))}
            </DivGeral>
        </>
    )
}