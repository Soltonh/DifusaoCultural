import type React from "react";
import educaimg from "../../assets/bemestar.png";
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, Paragrafo, ParagrafoConteudo, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import {TabelaCentral, TextoLink} from "./naturaliza"

const TelaNaturaliza: React.FC = () => {
    return (
        <>  
            <IndicadoPag src={educaimg} tamanho="5vw" titulo="Naturalização"/>
            <DivTextos>
                <Paragrafo>
                    A nacionalidade é o vínculo que une uma pessoa a um país, dando a ela direitos e deveres perante o Estado. 
                    Quem nasce no Brasil ou é filho de brasileiros já tem nacionalidade originária, mas quem nasceu em outro 
                    país pode se tornar brasileiro por meio da naturalização, um processo legal que garante a nacionalidade 
                    adquirida.
                </Paragrafo>
                <Paragrafo>
                    Ser naturalizado significa poder viver, estudar, trabalhar e participar plenamente da vida no Brasil, 
                    com quase todos os mesmos direitos de quem nasceu aqui. 
                </Paragrafo>
                <Paragrafo>
                    A tabela abaixo pode ajudá-lo a identificar qual tipo de naturalização é a mais adequada para você solicitar:
                </Paragrafo>
                <TabelaCentral>
                    <thead>
                        <th>Tipos de naturalização:</th>
                        <th>Prazo de residência:</th>
                        <th>Principais condições para solicitação:</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ordinária</td>
                            <td>4 anos no Brasil</td>
                            <td>Sem antecedentes criminais, proficiência em português</td>
                        </tr>
                        <tr>
                            <td>Extraordinária</td>
                            <td>15 anos ininterruptos</td>
                            <td>Sem condenação penal</td>
                        </tr>
                        <tr>
                            <td>Especial</td>
                            <td>1 ou 2 anos</td>
                            <td>
                                Casamento com brasileiro(a), filhos brasileiros, países de língua portuguesa ou serviços relevantes
                            </td>
                        </tr>
                        <tr>
                            <td>Provisória</td>
                            <td>Menores de 10 anos que fixaram residência no Brasil</td>
                            <td>
                                Válida até a maioridade
                            </td>
                        </tr>
                        <tr>
                            <td>Definitiva</td>
                            <td>Conversão da provisória quando a pessoa atinge 18 anos</td>
                            <td>
                                Deve ser solicitada até 2 anos após a maioridade
                            </td>
                        </tr>
                    </tbody>
                </TabelaCentral>
                <SanfonaTextos
                    items={[
                        {id: "1", titulo: (<><H2>Naturalização ordinária.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    A naturalização ordinária é a mais comum e pode ser solicitada por quem mora no Brasil há pelo menos 4 anos com residência regular.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Os requisitos principais são:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Ter residência por prazo indeterminado no Brasil;</ParagrafoConteudo>
                                <ParagrafoConteudo>Não possuir condenação penal (ou já ter se reabilitado);</ParagrafoConteudo>
                                <ParagrafoConteudo>Saber se comunicar em português;</ParagrafoConteudo>
                                <ParagrafoConteudo>Ter capacidade civil plena (ou seja, ter mais de 18 anos e aptidão para expressar vontade).</ParagrafoConteudo>                           
                                <ParagrafoConteudoTexto>
                                    O tempo mínimo de residência é de 4 anos antes da solicitação. Para refugiados, o prazo começa a contar a partir do 
                                    reconhecimento do refúgio pelo CONARE.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    É necessário apresentar antecedentes criminais, sendo as seguintes certidões:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    Certidão da Justiça Federal e Estadual do local onde morou nos últimos 4 anos: acessível pelo site  
                                    <TextoLink href="https://www.gov.br/pt-br/servicos/emitir-certidao-de-antecedentes-criminais" target="_blank"> “https://www.gov.br/pt-br/servicos/emitir-certidao-de-antecedentes-criminais” </TextoLink>
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>Antecedentes do país de origem, legalizados e traduzidos por tradutor juramentado.</ParagrafoConteudo>                           
                                <ParagrafoConteudoTexto>
                                    Para a comprovar a proficiência em português é possível obter por meio de:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Certificado Celpe-Bras (exame oficial de proficiência);</ParagrafoConteudo>
                                <ParagrafoConteudo>Diploma de curso superior ou pós-graduação feito no Brasil;</ParagrafoConteudo>
                                <ParagrafoConteudo>Curso de língua portuguesa para imigrantes em universidade credenciada pelo MEC.</ParagrafoConteudo>
                                <ParagrafoConteudo>Conclusão do ensino fundamental, médio ou EJA em instituição brasileira.</ParagrafoConteudo>
                                <ParagrafoConteudo>Aprovação no ENCCEJA ou no exame da OAB (para profissionais do direito).</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    📌Pessoas originárias de países de língua portuguesa não precisam comprovar proficiência.
                                </ParagrafoConteudoTexto>
                                
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "2", titulo: (<><H2>Hipóteses de redução de prazo na naturalização ordinária</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Apesar do prazo padrão para solicitar a naturalização ordinária ser de 4 anos, é possível reduzir os prazos nos seguinte casos:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                   Redução para 1 ano:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Se tiver filho(a) nascido(a) no Brasil ou ser brasileiro(a) nato(a) por outro motivo;</ParagrafoConteudo>
                                <ParagrafoConteudo>Originários de países de língua portuguesa;</ParagrafoConteudo>
                                <ParagrafoConteudo>Casamento ou união estável com brasileiro(a).</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                   Redução para 2 anos:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    Apátrida, haver prestado ou poder prestar serviço relevante ao Brasil, recomendar-se por sua 
                                    capacidade profissional, científica e artística.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    Prazos na ausência do território brasileiro na naturalização ordinária:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Prazo de no mínimo 1 ano: ausência máxima somada de 3 meses.</ParagrafoConteudo>
                                <ParagrafoConteudo>Prazo de no mínimo 2 anos: ausência máxima somada de 6 meses.</ParagrafoConteudo>
                                <ParagrafoConteudo>Prazo de no mínimo 4 anos: ausência máxima somada de 1 ano.</ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "3", titulo: (<><H2>Naturalização extraordinária, especial, provisória e naturalização definitiva</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Naturalização extraordinária
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>15 anos ininterruptos morando no Brasil.</ParagrafoConteudo> 
                                <ParagrafoConteudo>Sem condenação penal.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    A nacionalidade extraordinária pode ser concedida ao estrangeiro que esteja casado ou viva em união estável há mais de 5 anos com:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Integrante do Serviço Exterior Brasileiro em atividade;</ParagrafoConteudo> 
                                <ParagrafoConteudo>Pessoa a serviço do Estado brasileiro no exterior;</ParagrafoConteudo>
                                <ParagrafoConteudo>Funcionário de missão diplomática ou de repartição consular do Brasil que esteja em atividade há mais de 10 anos.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    Nacionalidade provisória:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Criança ou adolescente que tenha fixado residência em território nacional antes de completar 10 anos de idade.</ParagrafoConteudo> 
                                <ParagrafoConteudoTexto>
                                    Nacionalidade definitiva:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Após a maioridade, conversão da naturalização provisória em definitiva se requirida em até 2 anos após atingir a maioridade.</ParagrafoConteudo> 
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "4", titulo: (<><H2>Como solicitar a naturalização</H2></>), 
                        conteudo: 
                        (
                            <>
                            
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "5", titulo: (<><H2>Documentos mais solicitados</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>Documento de identificação (RNE, CRNM, passaporte, protocolo de refúgio etc.);</ParagrafoConteudo>
                                <ParagrafoConteudo>Comprovante de residência no Brasil;</ParagrafoConteudo>
                                <ParagrafoConteudo>Certidões de antecedentes criminais;</ParagrafoConteudo>
                                <ParagrafoConteudo>Certificado de proficiência em português (ou documento equivalente);</ParagrafoConteudo>
                                <ParagrafoConteudo>Declaração de que deseja se naturalizar;</ParagrafoConteudo>
                                <ParagrafoConteudo>Comprovante de pagamento da taxa (quando aplicável).</ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "5", titulo: (<><H2>Regularização migratória</H2></>), 
                        conteudo: 
                        (
                            <>
                            </>
                        ),
                        },
                    ]}
                />
            </DivTextos>
        </>
    );
    
}

export default TelaNaturaliza