import type React from "react";
import Saudeimg from "../../assets/saude.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, H3, Paragrafo, ParagrafoConteudo, ParagrafoConteudoLink, ParagrafoConteudoTexto } from "./saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";

const TelaSaude: React.FC = () => {
    return (
        <>  
            <IndicadoPag src={Saudeimg} tamanho="5vw" titulo="Saúde no Brasil"/>
            <DivTextos>
                <Paragrafo>
                    No Brasil, todas as pessoas têm direito à saúde gratuita e de 
                    qualidade, mesmo que não sejam brasileiras. Isso significa que ninguém pode 
                    ser impedido de ser atendido em hospitais e postos de saúde públicos, mesmo 
                    sem documentos ou situação migratória regular.
                </Paragrafo>
                <br/>
                <Paragrafo>
                    O sistema público de saúde brasileiro é chamado de SUS – Sistema Único
                    de Saúde, e ele é universal, gratuito e igualitário.
                </Paragrafo>
                <SanfonaTextos
                    items={[
                        {id: "1", titulo: (<><H2>Onde buscar atendimento?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <H3>O SUS possui diferentes tipos de unidades. Veja abaixo qual procurar em cada situação:</H3>
                                <ParagrafoConteudo>
                                    UBS – Unidade Básica de Saúde: é a “Porta de entrada” do SUS. Faz consultas, exames de rotina, vacinas, pré-natal e 
                                    acompanhamento familiar. Tratam situações simples e preventivas.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    AMA – Atendimento Médico Ambulatorial: Atente em casos de baixa complexidade e acompanhamento médico. Tratam sintomas 
                                    de febre, dor leve, pequenas infecções.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    UPA – Unidade de Pronto Atendimento: Atende em caso de urgências e emergências. Em casos, por exemplo, de dores fortes,
                                    febre alta, acidentes, falta de ar.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Hospitais: Trata casos graves e cirurgias. Essencial quando a vida está em risco.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    SAMU – Serviço de Atendimento Móvel de Urgência (telefone: 192): Realiza atendimento de emergência por ambulância, em 
                                    casos de acidentes, desmaios, infartos, quedas graves.
                                </ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "2", titulo: (<><H2>Como ser atendido?</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Você pode ser atendido mesmo sem ter o Cartão SUS. Basta ir até a unidade de saúde e se identificar solicitando o atendimento.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                O Cartão SUS, também chamado de Cartão Nacional de Saúde, é um documento que facilita o atendimento e permite acessar informações, 
                                resultados de exames, vacinas e consultas.
                                </ParagrafoConteudoTexto>
                                    <H3>Para fazer o cartão SUS:</H3>
                                <ParagrafoConteudo>
                                    Vá até a UBS (Unidade Básica de Saúde) mais próxima com documento de identidade (pode ser passaporte, protocolo de refúgio ou 
                                    outro documento estrangeiro) e comprovante de endereço.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Se não tiver documentos, explique sua situação, o atendimento ainda deve acontecer.
                                </ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    🚫 É ilegal negar o atendimento de qualquer pessoa nos serviços públicos de saúde!
                                </ParagrafoConteudoTexto>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "3", titulo: (<><H2>Serviços e tratamentos oferecidos.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <H3>O SUS garante acesso gratuito a:</H3>
                                <ParagrafoConteudo>
                                    Consultas médicas e odontológicas;
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Exames laboratoriais e de imagem;
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Vacinas;
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Medicamentos essenciais;
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Internações e cirurgias;
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Tratamentos contínuos (diabetes, hipertensão, HIV, entre outros).
                                </ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    🔗 Veja a lista completa de serviços: <a href="http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp" target="_blank"><ParagrafoConteudoLink >http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp</ParagrafoConteudoLink></a>
                                </ParagrafoConteudoTexto>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "4", titulo: (<><H2>Telefones e links úteis.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <H3>Telefones em caso de emergências:</H3>
                                <ParagrafoConteudo>
                                    SAMU: 192 ⟶ caso precise de atendimento emergencial de saúde.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Disque Saúde: 136 ⟶ para relatar insatisfações ou sugestões sobre serviços de saúde.
                                </ParagrafoConteudo>
                                <H3>Mapa geral de estabelecimentos da rede de saúde do SUS em São Paulo:</H3>
                                <a href="https://buscasaude.prefeitura.sp.gov.br/" target="_blank"><ParagrafoConteudoLink>
                                    https://buscasaude.prefeitura.sp.gov.br/
                                </ParagrafoConteudoLink></a>
                                <H3>Mapa das UBS em São Paulo capital:</H3>
                                <a href="https://prefeitura.sp.gov.br/web/saude/w/epidemiologia_e_informacao/geoprocessamento_e_informacoes_socioambientais/309778" target="_blank"><ParagrafoConteudoLink>
                                    https://prefeitura.sp.gov.br/web/saude/w/epidemiologia_e_informacao/geoprocessamento_e_informacoes_socioambientais/309778
                                </ParagrafoConteudoLink></a>
                                <H3>Organizações Não Governamentais com programas de assistência à migrantes:</H3>
                                <a href="https://caritassp.org.br/" target="_blank"><ParagrafoConteudoLink >
                                    https://caritassp.org.br/
                                </ParagrafoConteudoLink></a>
                                <a href="https://missaonspaz.org/" target="_blank"><ParagrafoConteudoLink >
                                    https://missaonspaz.org/
                                </ParagrafoConteudoLink></a>
                                <H3>Meu SUS Digital:</H3>
                                <a href="https://meususdigital.saude.gov.br/login" target="_blank"><ParagrafoConteudoLink>
                                    https://meususdigital.saude.gov.br/login
                                </ParagrafoConteudoLink></a>
                            </>
                        ),
                        },
                    ]}
                />
            </DivTextos>
        </>
    );
    
}

export default TelaSaude