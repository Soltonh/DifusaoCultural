import type React from "react";
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import IconeDuvidas from "../../assets/duvidas.svg";
import { TextoLink } from "../naturaliza/naturaliza";
import { useEffect } from "react";

const TelaDuvidas: React.FC = () => {

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
            <IndicadoPag src={IconeDuvidas} tamanho="5vw" titulo="Dúvidas Frequentes"/>
            <DivTextos>
                <SanfonaTextos
                    items={[
                        {id: "1", titulo: (<><H2>O que é refúgio?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Refúgio é uma movimentação involuntária do indivíduo, ou seja, a pessoa foi forçada a sair do 
                                    país por medo de perseguição fundado em raça, religião, nacionalidade, grupo social, 
                                    opiniões políticas, ou por causa de grave e generalizada violação de direitos humanos.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Essas pessoas não se sentiam seguras nesses países, seja onde nasceram (países de origem) ou 
                                    onde viviam até então, e por isso partiram em busca de proteção. Elas são consideradas refugiadas.
                                </ParagrafoConteudoTexto>                           
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "2", titulo: (<><H2>Posso trabalhar com o Protocolo de Refúgio?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Sim! O Protocolo de Refúgio já garante o direito de trabalhar com carteira assinada, assim como qualquer brasileiro. 
                                    Você pode procurar vagas pelo SINE (Sistema Nacional de Emprego), CIEE, e Centros de Referência ao Imigrante. 
                                    ONGs como a Missão Paz e o ADUS também ajudam com vagas, cursos e currículos.
                                </ParagrafoConteudoTexto>                          
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "3", titulo: (<><H2>Meus filhos podem estudar no Brasil?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Sim. Toda criança e adolescente tem direito à educação gratuita nas escolas públicas brasileiras, mesmo que os pais 
                                    não tenham todos os documentos. Basta apresentar o protocolo de refúgio e o comprovante de residência.
                                </ParagrafoConteudoTexto>                          
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "4", titulo: (<><H2>Tenho direito a atendimento médico no Brasil?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Sim! Todo migrante e refugiado tem direito ao atendimento gratuito pelo SUS (Sistema Único de Saúde), sem discriminação. 
                                    Você pode ser atendido em postos de saúde, hospitais públicos e pronto-socorros.
                                </ParagrafoConteudoTexto>                          
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "5", titulo: (<><H2>Quais são meus direitos como migrante ou refugiado?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Você tem os mesmos direitos básicos que qualquer pessoa no Brasil: trabalhar, estudar, usar o sistema de saúde, 
                                    ter moradia digna e ser tratado com respeito. A lei brasileira protege contra discriminação e exploração.
                                </ParagrafoConteudoTexto>                          
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "6", titulo: (<><H2>O que é CPF? E como posso emitir o meu?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    O CPF é um documento essencial para a identificação e regularização de cidadãos no Brasil. Ele é utilizado em diversas 
                                    áreas da vida cotidiana, como a abertura de contas bancárias, a emissão de documentos fiscais, e a participação em 
                                    programas sociais.
                                </ParagrafoConteudoTexto>                          
                                <ParagrafoConteudoTexto>
                                    Você pode tirar gratuitamente pela internet no site da Receita Federal <TextoLink href="https://servicos.receita.fazenda.gov.br/servicos/cpf/inscricaocpfestrangeiro/default.asp"> (https://servicos.receita.fazenda.gov.br/servicos/cpf/inscricaocpfestrangeiro/default.asp)</TextoLink> ou pessoalmente em uma 
                                    agência dos Correios.
                                </ParagrafoConteudoTexto>                          
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "7", titulo: (<><H2>Sofri discriminação ou violência, o que devo fazer?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Procure uma delegacia e registre um boletim de ocorrência. Também é possível denunciar ligando para o 
                                    número 100 (Disque Direitos Humanos). A Defensoria Pública oferece atendimento jurídico gratuito, inclusive 
                                    com intérpretes
                                    (confira os endereços e telefone de contato do polo mais próximo: <TextoLink href=" https://www.defensoria.sp.def.br/institucional/enderecos-e-telefones?" target="_blank"> https://www.defensoria.sp.def.br/institucional/enderecos-e-telefones?</TextoLink>).
                                </ParagrafoConteudoTexto>                         
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "8", titulo: (<><H2>Posso abrir uma conta em banco no Brasil mesmo sendo estrangeiro?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Sim! Basta ter CPF e um documento de identificação (como o Protocolo de Refúgio). Alguns bancos pedem também 
                                    comprovante de residência.
                                </ParagrafoConteudoTexto>                         
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "9", titulo: (<><H2>Quanto tempo demora o processo de refúgio?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    O processo pode demorar meses ou anos, mas durante todo o tempo o protocolo é válido e garante seus direitos. 
                                </ParagrafoConteudoTexto>                         
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "10", titulo: (<><H2>Posso registrar meu filho no cartório mesmo sendo migrante?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Sim. O registro é um direito garantido por lei e pode ser feito com qualquer documento de identidade dos pais, mesmo estrangeiro.
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

export default TelaDuvidas