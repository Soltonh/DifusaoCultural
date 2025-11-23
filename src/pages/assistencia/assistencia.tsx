import type React from "react";
import educaimg from "../../assets/assissocial.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, Paragrafo, ParagrafoConteudo, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import { A} from "../educacao/educacao";
import { TextoLink } from "../naturaliza/naturaliza";
import { useEffect } from "react";

const TelaAssistencia: React.FC = () => {
    
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
            <IndicadoPag src={educaimg} tamanho="5vw" titulo="Assistência Social"/>
            <DivTextos>
                <Paragrafo>
                    A fim de facilitar o acesso, nossas informações foram estabelecidas em nível federal e também com foco na cidade de São Paulo. 
                    As pessoas migrantes que se encontram em território brasileiro, independentemente de sua nacionalidade ou condição migratória, 
                    têm direito de acesso às ofertas da política de assistência social quando dela necessitem.
                </Paragrafo>
                <br/>
                <Paragrafo>
                    Existem diversos meios, no Brasil, de possuir uma assistência social, sendo eles:
                </Paragrafo>
                <SanfonaTextos
                    items={[
                        {id: "assistencia1", titulo: (<><H2>Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS)</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    No Brasil, temos o Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS) é 
                                    responsável por essa política. Você pode encontrar informações sobre seus direitos e os locais de atendimento 
                                    no site: <TextoLink href="https://www.gov.br/mds/pt-br" target="_blank">🔗 www.gov.br/mds</TextoLink>
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Meios de comunicação:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Disque Social - Ouvidoria: 121.</ParagrafoConteudo>
                                <ParagrafoConteudo>Pelo aplicativo de mensagens WhatsApp no número (61) 4042-1552 – Ministério da Justiça (para dúvidas sobre imigração).</ParagrafoConteudo>                      
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "assistencia2", titulo: (<><H2>Rede de Acolhimento</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                   Em São Paulo existe uma rede de acolhimento preparada para atender imigrantes e refugiados. O principal local 
                                   de acolhimento é o <A>CRAI - Centro de Referência e Acolhida para Imigrantes,</A> que oferece atendimento em vários 
                                   idiomas. Entre os serviços oferecidos estão as orientações para a regularização migratória, o acesso aos direitos
                                   sociais, as diretrizes jurídicas e o encaminhamento aos serviço sociais. Denúncias de violações de direitos 
                                   humanos também podem ser recebidas e encaminhadas pelo órgão.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>Meios de comunicação:</ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Endereço: Rua Major Diogo, 834 – Bela Vista, São Paulo/SP.</ParagrafoConteudo>
                                <ParagrafoConteudo>Telefone (11) 2361-5069</ParagrafoConteudo>
                                <ParagrafoConteudo>Site: <TextoLink href="https://www.prefeitura.sp.gov.br/web/imigrantes_e_trabalho_decente/w/crai/186981" target="_blank">https://www.prefeitura.sp.gov.br/web/imigrantes_e_trabalho_decente/w/crai/186981</TextoLink> </ParagrafoConteudo>    
                                <ParagrafoConteudoTexto>
                                   Além do CRAI, temos também o SEFRAS - é uma organização humanitária que luta todos os dias no combate à fome - 
                                   e o CAMI - realiza o acolhimento e fornece informações e orientações aos imigrantes e refugiados.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>SEFRAS - Ação Social Franciscanas:</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>Site: <TextoLink href="https://www.sefras.org.br" target="_blank">https://www.sefras.org.br</TextoLink></ParagrafoConteudoTexto>    
                                <ParagrafoConteudoTexto>Endereço: Rua Rodrigues dos Santos, 831, Brás - São Paulo / SP - CEP 03009-010.</ParagrafoConteudoTexto>
                                <ParagrafoConteudo>CAMI - Centro de Apoio Pastoral do Migrante:</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>Site: <TextoLink href="https://www.cami.org.br" target="_blank">https://www.cami.org.br</TextoLink></ParagrafoConteudoTexto>    
                                <ParagrafoConteudoTexto>Endereço: Alameda Nothmann, 485 - Campos Elíseos, São Paulo - SP, 01216-000</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>Telefone: (11) 3333-0847</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Caso você esteja em uma situação dificultosa, existe a possibilidade de solicitar ajuda, no Brasil, através do 
                                    CRAS (Centro de Referência de Assistência Social) mais perto de onde mora e explique sua situação: diga que é migrante 
                                    ou refugiado e está precisando de ajuda (dificuldade financeira, falta de moradia, desemprego etc.). Leve documentos que 
                                    tiver, se tiver (passaporte, protocolo da Polícia Federal, carteira de trabalho (CTPS), CPF, ou apenas o nome completo).
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto><A>Se não tiver documentos, você ainda pode ser atendido.</A></ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto><A>
                                    Se não souber onde fica o CRAS, peça ajuda no CRAI (em São Paulo) ou ligue para o número 121 (Central do Governo Federal).</A>
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    No CRAS, a equipe vai escutar sua história e ver de quais benefícios você pode participar (como programas de renda, 
                                    abrigo, alimentação, etc).
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Site para localizar um CRAS: <TextoLink href="https://www.gov.br/mds/pt-br" target="_blank">🔗 www.gov.br/mds</TextoLink></ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "assistencia3", titulo: (<><H2>Programas sociais do governo</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    No Brasil, temos programas sociais de governo onde há recursos financeiros transferidos diretamente da União 
                                    para o cidadão que participa de programas sociais específicos. Os principais programas sociias são acessados 
                                    pelo Cadastro único (Cadúnico), com ele, você pode ter acesso a benefícios como:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Auxílio Brasil: ajuda de dinheiro mensal para famílias com baixa renda.</ParagrafoConteudo> 
                                <ParagrafoConteudo>BPC (Benefício de Prestação Continuada): para pessoas com deficiência ou idosos com baixa renda.</ParagrafoConteudo> 
                                <ParagrafoConteudoTexto>Para realizar um cadastro no CadÚnico deverá:</ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Vá até um CRAS da sua cidade e leve seus documentos (ou o que tiver).</ParagrafoConteudo> 
                                <ParagrafoConteudo>Faça o CadÚnico com ajuda do assistente social.</ParagrafoConteudo> 
                                <ParagrafoConteudo>Aguarde ser incluído nos programas de renda. </ParagrafoConteudo> 
                                <ParagrafoConteudoTexto>Site:
                                    <TextoLink href="https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal" target="_blank">  https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal</TextoLink>
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Em São Paulo, você deve ir ao CRAI ou CRAS mais próximo e solicitar ajuda para fazer o Cadastro Único 
                                    informando sua condição de migrante ou refugiado. Após o cadastro, você poderá receber o Auxílio Brasil,
                                    BPC e outros benefícios.
                                </ParagrafoConteudoTexto>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "assistencia4", titulo: (<><H2>Pessoas em situação de rua</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Se você está em situação de tua, tem o direito a atendimento mesmo sem casa e sem documentos.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Deve procurar o CREAS (Centro de Referências Especializado) ou o CRAS da sua cidade, pois estes podem te 
                                    encaminhar a um abrigo e oferecer alimentação e orientação.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    O site 
                                    <TextoLink href="https://www.gov.br/pt-br/temas/servicos-para-imigrantes">
                                        https://www.gov.br/pt-br/temas/servicos-para-imigrantes
                                    </TextoLink> é um ótimo guia, pois disponibiliza os serviços
                                    que precisará utilizar para permanecer legalmente no país, seja como refugiado, estrangeiro residente ou 
                                    cidadão brasileiro naturalizado.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    É importante que você reserve um tempo para ler com cuidado as informações dos serviços aqui listados para 
                                    garantir um processamento rápido e seguro da sua necessidade.
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

export default TelaAssistencia