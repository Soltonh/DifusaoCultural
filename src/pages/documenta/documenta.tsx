import type React from "react";
import documentaimg from "../../assets/documentos.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, H3, Paragrafo, ParagrafoConteudo, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import { TextoLink } from "../naturaliza/naturaliza";
import { useEffect } from "react";

const TelaDocumenta: React.FC = () => {

    useEffect(() => {
        const scrollToHash = () => {
        const hash = window.location.hash;
        if (!hash) return;

        const id = hash.slice(1); // tira o "#"
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        };
        setTimeout(scrollToHash, 0);
        
        window.addEventListener("hashchange", scrollToHash);
        return () => window.removeEventListener("hashchange", scrollToHash);
    }, []);

    return (
        <>  
            <IndicadoPag src={documentaimg} tamanho="5vw" titulo="Documentação"/>
            <DivTextos>
                <Paragrafo>
                    Para que a pessoa migrante tenha acesso aos seus direitos, o primeiro passo é regularizar sua presença em território nacional, 
                    atualizando sua situação documental. Todas as pessoas migrantes, independente do motivo da migração, têm direito a um documento 
                    de identidade para se estabelecer no país de forma regular, a um cadastro como pessoa física, para acessar seus direitos, e à 
                    carteira de trabalho, para se inserir no mercado laboral. Dentre os principais documentos, nos temos:
                </Paragrafo>
                <SanfonaTextos
                    items={[
                        {id: "documentos1", titulo: (<><H2>Registro nacional de estrangeiros (RNE)</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    O Registro Nacional de Estrangeiro (RNE) é um documento de identificação para imigrantes, 
                                    inclusive pessoas refugiadas, que foi emitido até o final de 2018 e também tem o formato de um cartão. Ele 
                                    está sendo substituído, aos poucos, pela Carteira de Registro Nacional Migratório (CRNM).
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    O modelo é utilizado por pessoas que foram reconhecidas como refugiadas durante a vigência do 
                                    Estatuto do Estrangeiro, <TextoLink style={{textDecoration: "underline"}} href="https://www.planalto.gov.br/ccivil_03/leis/l6815.htm" target="_blank">
                                    Lei nº 6.815, de 19 de agosto de 1980</TextoLink>, revogado pela
                                    <TextoLink style={{textDecoration: "underline"}} href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm" target="_blank"> Lei de Migração, 
                                    Lei nº 13.445, 24 de maio de 2017.</TextoLink> O RNE, dentro da data de validade, cumpre todos os papeis de 
                                    um documento de identificação. 
                                </ParagrafoConteudo>                      
                                <ParagrafoConteudo>
                                    CRNM e RNE são dois modelos diferentes para o documento de identificação de pessoas imigrantes 
                                    e refugiadas, com residência por tempo indeterminado no Brasil. Se o seu RNE está dentro da validade, não se 
                                    preocupe. Você só precisa renová-lo quando a data de vencimento se aproximar. No momento da renovação, seu novo 
                                    documento virá no modelo da CRNM.
                                </ParagrafoConteudo>                      
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "documentos2", titulo: (<><H2>Carteira de registro nacional migratório (CRNM)</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    Destinado para todas as pessoas migrantes que querem se estabelecer no Brasil e solicitam autorização 
                                    autorização de residência no país – inclusive as pessoas refugiadas com situação reconhecida pelo CONARE 
                                    (O CONARE é um órgão colegiado, vinculado ao Ministério da Justiça e Segurança Pública, que delibera sobre as 
                                    solicitações de reconhecimento da condição de refugiado no Brasil).
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                   Documento de identidade para pessoas refugiadas e migrantes com residência autorizada no Brasil.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    Identifica a pessoa migrante ao apresentar o número de Registro Nacional Migratório, dados pessoais e de 
                                    residência completos. Substitui o RNE e o CIE.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    É um documento emitido pela Polícia Federal, para isso deve:
                                </ParagrafoConteudo> 
                                <ol style={{marginLeft: "2rem"}}>
                                    <ParagrafoConteudo>
                                        Acessar o site da Polícia Federal para preencher o formulário de Autorização de Residência.
                                        <ul style={{marginLeft: "2rem"}}>
                                            <ParagrafoConteudo>
                                            É preciso preencher a modalidade escolhida, de acordo com seu local de origem ou motivo de sua 
                                            permanência (como tratamento de saúde, reunião familiar, etc).
                                            </ParagrafoConteudo> 
                                            <ParagrafoConteudo>
                                            Para pessoas migrantes venezuelanas, a modalidade que pode ser escolhida é a de Nacional de país 
                                            fronteiriço onde não esteja em vigor o acordo de residência para nacionais dos estados partes do 
                                            Mercosul e países associados.
                                            </ParagrafoConteudo> 
                                        </ul>
                                    </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    Ao finalizar o preenchimento do formulário, agendar o comparecimento na unidade da Polícia Federal mais 
                                    próxima de sua moradia, com atendimento para migrantes, para apresentar os documentos requeridos e taxas 
                                    pagas.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    Comparecer à unidade da Polícia Federal para receber a Carteira de Registro Nacional Migratório. Os documentos 
                                    variam de acordo com o caso de regularização migratória e estão disponíveis no site da Polícia Federal.
                                </ParagrafoConteudo> 
                                </ol>
                                <ParagrafoConteudoTexto>
                                    A validade de acordo com a base legal de autorização de residência - pode ter prazo determinado (até 2 anos) 
                                    ou indeterminado (com renovação a cada 9 anos). A renovação deve ser feita 90 dias antes do vencimento.
                                </ParagrafoConteudoTexto> 
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "documentos3", titulo: (<><H2>Documento provisório de registro nacional migratório - DPRNM</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>Para pessoa migrante cuja solicitação de refúgio está sendo analisada pelo CONARE.</ParagrafoConteudo> 
                                <ParagrafoConteudo>Trata-se de um documento provisório de identidade com dados pessoais.</ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    Serve para identificar a pessoa solicitante de refúgio até a decisão final do processo no CONARE e garante 
                                    direito à emissão de outros documentos, acesso aos serviços básicos, abertura de conta bancária e mecanismos 
                                    protetivos do Estatuto dos Refugiados.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>É um documento emitido pela Polícia Federal, para isso deve:</ParagrafoConteudo>
                                <ol style={{marginLeft: "2rem"}}>
                                    <ParagrafoConteudo>
                                        Em posse do Protocolo de Solicitação de Refúgio emitido pelo Sisconare e dos documentos de identificação 
                                        que dispuser, acessar o site da Polícia Federal para preencher o formulário de Autorização de Residência.
                                    </ParagrafoConteudo> 
                                    <ParagrafoConteudo>
                                        Ao finalizar o preenchimento do formulário, agendar o comparecimento na unidade da Polícia Federal mais 
                                        próxima de sua moradia, com atendimento para migrantes para apresentar os documentos requeridos.
                                    </ParagrafoConteudo> 
                                    <ParagrafoConteudo>
                                        Comparecer na unidade da Polícia Federal para receber o Documento Provisório de Registro Nacional Migratório.
                                    </ParagrafoConteudo> 
                                </ol>
                                <ParagrafoConteudoTexto>
                                    A validade é de que durante a análise de solicitação de refúgio pelo CONARE. Em caso de arquivamento ou extinção
                                    do processo sem julgamento, ou pedido indeferido, o DPRNM perde sua validade. Se o pedido for deferido, a 
                                    pessoa solicitante ganha direito de emitir a CRNM (Carteira de Registro Nacional Migratório).
                                </ParagrafoConteudoTexto> 
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "documentos4", titulo: (<><H2>Protocolo de Solicitação de Refúgio</H2></>), 
                        conteudo: 
                        (
                            <>
                               <ParagrafoConteudo>
                                    Destinado para a pessoa migrante que busca proteção internacional, cuja solicitação de refúgio 
                                    será analisada pelo CONARE (Comitê Nacional para os Refugiados).
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>É um documento provisório de identidade com dados pessoais.</ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    Serve para atestar a situação regular da pessoa migrante no país e garante o direito à emissão de outros documentos, 
                                    acesso aos serviços básicos, abertura de conta bancária e inclusão no mercado de trabalho.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    É um documento emitido pela Polícia Federal, para isso deve:
                                </ParagrafoConteudo>
                                <ol style={{marginLeft: "2rem"}}>
                                    <H3 style={{marginLeft: "-2rem"}}>Para emissão do protocolo:</H3> 
                                    <ParagrafoConteudo>
                                        Acessar o site do Sisconare para cadastramento na plataforma de tramitação de processos de refúgio no Brasil.
                                    </ParagrafoConteudo> 
                                    <ParagrafoConteudo>
                                        Após o cadastro, escolher a opção de “Solicitação de Refúgio” e preencher o formulário de pedido de refúgio.
                                    </ParagrafoConteudo> 
                                    <ParagrafoConteudo>
                                        Acessar o site da Polícia Federal e agendar comparecimento na unidade mais próxima para emissão do Protocolo 
                                        de Solicitação de Refúgio, portando os documentos necessários.
                                    </ParagrafoConteudo> 
                                </ol>
                                <ol style={{marginLeft: "2rem"}}>
                                    <H3 style={{marginLeft: "-2rem"}}>Para renovação:</H3> 
                                    <ParagrafoConteudo>
                                        Para quem ainda não tiver cadastro, acessar o site do Sisconare e escolher a opção de “Recadastro de Solicitação 
                                        de Refúgio”.
                                    </ParagrafoConteudo> 
                                    <ParagrafoConteudo>
                                        Agendar pedido de emissão ou renovação na unidade mais próxima da Polícia Federal, levando todos os documentos necessários.
                                    </ParagrafoConteudo> 
                                </ol>
                                <ParagrafoConteudoTexto>
                                    ⟶ Pedido Analisado pelo CONARE (Comitê Nacional para os Refugiados).
                                </ParagrafoConteudoTexto> 
                                <ParagrafoConteudoTexto>
                                    Validade: 1 ano, enquanto o processo de reconhecimento da condição de refugiado estiver em análise pelo CONARE. Renovação 
                                    deve ser realizada até 6 meses depois do vencimento - caso contrário, o processo de solicitação será extinto.
                                </ParagrafoConteudoTexto> 
                                <ParagrafoConteudoTexto>
                                    Para processos de refúgio deferidos, quando a pessoa migrante é reconhecida como refugiada, é preciso dar entrada no 
                                    pedido de residência no país.
                                </ParagrafoConteudoTexto> 
                            </>
                        ),
                        },
                    ]}
                />
            </DivTextos>
        </>
    );
    
}

export default TelaDocumenta