import React, { useState } from "react";
import styled from "styled-components";

export const FundoTotal = styled.div`
    background-color: #DCF4CE;
    position: absolute;
    bottom: 0;
    left: 10px;
    max-width: 800px;
    max-height: 600px;
    min-width: 500px;
    min-height: 250px;
    display: grid;
    grid-template-columns: 20% 60%;
    grid-template-rows: 2vh 2vh 2vh 20vh;
    gap: 50px;
    padding: 10px 0px 10px 15px;
    border-radius: 20px;
    border: solid 1px black;
    

    & label{
        color: black;
        font-size: 20px;
        margin: auto;
    }
    
    & input{
        border-radius: 8px;
        background-color: white;
        height: 150%;
        margin: auto;
        width: 100%;
        color: black;
    }

    & textarea{
        border-radius: 8px;
        background-color: white;
        height: 100%;
        margin: auto;
        width: 100%;
        resize: none;
        color: black;
        padding: 10px;
    }

    
    & button{
        margin-left: auto;
        background-color: #99E17A;
        color: #464646;
        border: solid 1px black;
        margin-right: 30px;
        
        &:hover{
           background-color: #64c53b; 
        }
    }

    & h3{
        color: black;
        font-size: 15px;
        width: 100%;
        margin: auto;
    }

    & section{
        grid-area: 1 / span 2;

    }


    & h2 {
        color: black;
        width: 200px;
        font-size: 15px;
        margin: auto;
        text-align: center;
    }

    & div{ 
        display: grid;
        grid-template-columns: 80% 150%;

    }
`

export const Fechar = styled.div`

    background-color: #99E17A;
    margin-left: auto;
    width: 8%;
    height: 100%;
    padding-bottom: 25px;
    padding-top: 5px;
    text-align: center;
    margin-top: -20px;
    margin-right: -20px;
    border-radius: 8px;
    cursor: pointer;
    color: #464646;
    border: solid 1px black;
    
    &:hover{
        background-color: #64c53b; 
    }

`

const Forms: React.FC = () => {

    const [visible, setVisible] = useState(true);
    const [mensagemEnvio, setMensagemEnvio] = useState("");

    // se não estiver visível, não renderiza nada
    if (!visible) return null;

    const handleFechar = () => {
        setVisible(false);
    };

    const handleEnviar = () => {
        setMensagemEnvio("Obrigado pelo envio, iremos avaliar!");
        setTimeout(() => {
           handleFechar();
        }, 3000);
        
    };

    return (
        <>
            <FundoTotal>
                <section>
                    <h3>Para dúvidas, avaliações e feedback nos envie uma mensagem:</h3>
                    <Fechar onClick={handleFechar}>X</Fechar>
                </section>
                <label>Nome:</label>
                <input></input>
                <label>Email:</label>
                <input></input>
                <label>Mensagem:</label>
                <textarea></textarea>
                <div>
                    <button type="submit" onClick={handleEnviar}>Enviar</button>
                    <h2>{mensagemEnvio}</h2>
                </div>
            </FundoTotal>
        </>
    )
}

export default Forms