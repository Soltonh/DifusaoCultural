import type React from "react";
import educaimg from "../../assets/bemestar.png";
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, H3, Paragrafo, ParagrafoConteudo, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import {TabelaCentral, TextoLink} from "./naturaliza"
import { useEffect } from "react";

const TelaNaturaliza: React.FC = () => {

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
                        {id: "naturaliza1", titulo: (<><H2>Naturalização ordinária.</H2></>), 
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
                        {id: "naturaliza2", titulo: (<><H2>Hipóteses de redução de prazo na naturalização ordinária</H2></>), 
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
                        {id: "naturaliza3", titulo: (<><H2>Naturalização extraordinária, especial, provisória e naturalização definitiva</H2></>), 
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
                        {id: "naturaliza4", titulo: (<><H2>Como solicitar a naturalização</H2></>), 
                        conteudo: 
                        (
                            <>
                                <H3>Solicitação Digital do Pedido</H3>
                                <ol type="a">
                                    <ParagrafoConteudo>Acesse o Sistema Naturalizar-se por meio de um dos links:</ParagrafoConteudo>
                                    <ul style={{listStyleType: "disc"}}>
                                        <ParagrafoConteudo><TextoLink href="https://www.gov.br/pt-br/servicos/solicitar-naturalizacao" target="_blank">https://www.gov.br/pt-br/servicos/solicitar-naturalizacao</TextoLink></ParagrafoConteudo>
                                        <ParagrafoConteudo><TextoLink href="https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c508ba81f" target="_blank">https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c508ba81f</TextoLink></ParagrafoConteudo>
                                    </ul>
                                    <ParagrafoConteudoTexto>
                                        É necessário ter uma conta no gov.br para ter acesso ao formulário. Você deverá inserir seu CPF e sua senha para iniciar o processo.
                                    </ParagrafoConteudoTexto>
                                    <ParagrafoConteudo>Preencha o formulário eletrônico.</ParagrafoConteudo>
                                    <ParagrafoConteudo>Envie todos os documentos exigidos para a modalidade de naturalização correspondente.</ParagrafoConteudo>
                                    <ul style={{listStyleType: "disc"}}>
                                        <ParagrafoConteudo>Existem diferentes modalidades (ordinária, extraordinária, provisória e definitiva), cada uma com requisitos específicos.</ParagrafoConteudo>
                                    </ul>
                                </ol>
                                <H3>Agendamento na Polícia Federal</H3>
                                <ol type="a">
                                    <ParagrafoConteudo>Após a aprovação preliminar da documentação enviada no sistema, agende o atendimento na unidade da Polícia Federal do seu domicílio.</ParagrafoConteudo>
                                    <ParagrafoConteudo>Preencha o formulário de agendamento no link:</ParagrafoConteudo>
                                    <ul style={{listStyleType: "disc"}}>
                                        <ParagrafoConteudo><TextoLink href="https://servicos.pf.gov.br/agenda-web/formulario/13 " target="_blank">https://servicos.pf.gov.br/agenda-web/formulario/13 </TextoLink></ParagrafoConteudo>
                                        <ParagrafoConteudo>Caso encontre falhas no sistema ou erros de acesso, envie um e-mail para: naturalizarse@mj.gov.br.</ParagrafoConteudo>
                                    </ul>
                                </ol>
                                <H3>Compareça à Polícia Federal na data e local agendados, levando os documentos originais.</H3>
                                <ul style={{listStyleType: "disc"}}>
                                    <ParagrafoConteudo>Para verificar os endereços das delegacias de Polícia Federal acesse o site <TextoLink href="https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias" target="_blank">https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias</TextoLink></ParagrafoConteudo>
                                </ul>
                                <H3>Após o atendimento, acompanhe o andamento do pedido pelo sistema.</H3>
                                <ul style={{listStyleType: "disc"}}>
                                    <ParagrafoConteudo><TextoLink href="https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c50912dd0" target="_blank">https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c50912dd0</TextoLink></ParagrafoConteudo>
                                    <ParagrafoConteudo>Fique atento a eventuais notificações para complementação de documentos.</ParagrafoConteudo>
                                </ul>
                                <H3>IMPORTANTE:</H3>
                                <ul style={{listStyleType: "disc"}}>
                                    <ParagrafoConteudo>Mantenha seu endereço sempre atualizado e verifique regularmente a caixa de e-mail.</ParagrafoConteudo>
                                    <ParagrafoConteudo>Para atualizar o endereço, apresente um dos seguintes comprovantes:</ParagrafoConteudo>
                                    <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                        <ParagrafoConteudo>Conta recente de água, energia ou telefone;</ParagrafoConteudo>
                                        <ParagrafoConteudo>Contrato de locação ou escritura de imóvel;</ParagrafoConteudo>
                                        <ParagrafoConteudo>
                                            São aceitos comprovantes em nome próprio, dos pais ou do cônjuge/companheiro, desde que seja comprovado o vínculo 
                                            com documentos oficiais (certidão de nascimento, casamento ou união estável).
                                        </ParagrafoConteudo>
                                    </ul>
                                </ul>
                                <H3>Análise pelo Ministério da Justiça.</H3>
                                <ParagrafoConteudoTexto>
                                    Após finalização da etapa na Polícia Federal, o processo será encaminhado ao Departamento de Migrações do Ministério da Justiça. O 
                                    órgão poderá emitir novas notificações solicitando complementações documentais.
                                </ParagrafoConteudoTexto>
                                <ul style={{listStyleType: "disc"}}>
                                    <ParagrafoConteudo>Continue acompanhando o processo pelo sistema:</ParagrafoConteudo>
                                    <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                    <ParagrafoConteudo><TextoLink href="https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c50912dd0" target="_blank">https://sso.acesso.gov.br/login?client_id=5b1db4fd-87e7-4689-9c37-faa2a5663c6c&authorization_id=17c50912dd0</TextoLink></ParagrafoConteudo>
                                    </ul>
                                </ul>
                                <H3>Resultado do Pedido.</H3>
                                <ul style={{listStyleType: "disc"}}>
                                    <ParagrafoConteudo>A decisão será publicada no Diário Oficial da União: <TextoLink href="https://www.in.gov.br/inicio" target="_blank">https://www.in.gov.br/inicio</TextoLink></ParagrafoConteudo>
                                    <ParagrafoConteudo>Consulte periodicamente a publicação, buscando pelo seu nome.</ParagrafoConteudo>
                                    <ParagrafoConteudoTexto>Se o pedido for deferido:</ParagrafoConteudoTexto>
                                    <ParagrafoConteudo>Solicite o RG (carteira de identidade brasileira) nos órgãos que atendem cidadãos brasileiros, apresentando:</ParagrafoConteudo>
                                    <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                        <ParagrafoConteudo>Seus documentos atualizados;</ParagrafoConteudo>
                                        <ParagrafoConteudo>Cópia da publicação do deferimento.</ParagrafoConteudo>
                                    </ul>
                                    <ParagrafoConteudo>Após obter o RG, entregue sua Carteira de Registro Nacional Migratório (CRNM) na unidade da Polícia Federal.</ParagrafoConteudo>
                                    <ParagrafoConteudoTexto>Se o pedido for indeferido:</ParagrafoConteudoTexto>
                                    <ParagrafoConteudo>É possível: apresentar recurso no prazo de 10 dias a partir do recebimento da notificação.</ParagrafoConteudo>
                                    <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                        <ParagrafoConteudo>Solicitar assistência da Defensoria Pública da União (DPU) para interposição do recurso; ou</ParagrafoConteudo>
                                        <ParagrafoConteudo>Questionar a decisão no Poder Judiciário.</ParagrafoConteudo>
                                    </ul>
                                </ul>
                            
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "naturaliza5", titulo: (<><H2>Documentos mais solicitados</H2></>), 
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
                        {id: "naturaliza6", titulo: (<><H2>Regularização migratória</H2></>), 
                            conteudo: 
                            (
                                <>
                                <H3>O que é a Autorização de Residência?</H3>
                                <ParagrafoConteudoTexto>
                                    A Autorização de Residência (AR) é a permissão concedida à pessoa migrante para viver no Brasil, de forma provisória ou definitiva. 
                                    Ela pode ser solicitada diretamente em território brasileiro, independentemente da posse de visto prévio e da condição migratória 
                                    atual da pessoa.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    A Autorização de Residência se materializa por meio do Registro Nacional Migratório (RNM), número único de identificação que permitirá a 
                                    participação da pessoa migrante na vida civil.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    O RNM é gerado no momento do pedido de autorização ou registro de residência perante a Polícia Federal. Após a concessão do RNM, será emitida 
                                    a Carteira de Registro Nacional Migratório (CRNM), documento oficial de identidade do migrante no Brasil.
                                </ParagrafoConteudo>
                                <H3>IMPORTANTE:</H3>
                                <ParagrafoConteudo>
                                    Visto e Autorização de Residência são permissões diferentes:
                                </ParagrafoConteudo>
                                <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                    <ParagrafoConteudo>Visto é a permissão de entrada no país.</ParagrafoConteudo>
                                    <ParagrafoConteudo>Autorização de Residência é a permissão para permanecer no território brasileiro.</ParagrafoConteudo>
                                    <ParagrafoConteudo>
                                        Como regra, a Autorização de Residência somente é concedida quando a pessoa já se encontra no Brasil, exceto na modalidade prévia 
                                        para visto temporário de trabalho.
                                    </ParagrafoConteudo>
                                </ul>
                                <H3>Tipos de Autorização de Residência</H3>
                                <ParagrafoConteudoTexto>
                                    As autorizações de residência podem ser:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    Por tempo determinado (temporárias): quando têm finalidade que possui previsão de término, como tratamento de saúde ou estudo. Podem 
                                    ser renovadas diversas vezes.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Por tempo indeterminado (permanentes): quando decorrem da própria natureza da proteção conferida, como nos casos de:
                                </ParagrafoConteudo>
                                <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                    <ParagrafoConteudo>Refúgio;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Vítimas de trabalho escravo;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Acolhida humanitária;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Reunião familiar;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Entre outras.</ParagrafoConteudo>
                                </ul>
                                <H3>Modalidades com Solicitação Presencial</H3>
                                <ParagrafoConteudoTexto>
                                    As autorizações mais comuns, como reunião familiar, estudo, tratamento de saúde, acolhida humanitária, cumprimento de pena e acordos 
                                    bilaterais, devem ser solicitadas presencialmente. Para isso, a pessoa requerente deve:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Reunir os documentos exigidos para a modalidade específica de Autorização de Residência.</ParagrafoConteudo>
                                <ParagrafoConteudo>Acessar o Sistema de Registro Nacional Migratório (SISMIGRA), disponível no site da Polícia Federal pela plataforma Gov.br.</ParagrafoConteudo>
                                <ParagrafoConteudo>Preencher o formulário adequado:</ParagrafoConteudo>
                                <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                    <ParagrafoConteudo>Registro de residência;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Autorização de residência ou;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Alteração de prazo.</ParagrafoConteudo>
                                </ul>
                                <ParagrafoConteudo>Agendar atendimento presencial na unidade da Polícia Federal competente (dependendo da unidade, o agendamento pode ser obrigatório).</ParagrafoConteudo>
                                <ParagrafoConteudo>Comparecer pessoalmente na data marcada para apresentar o pedido e entregar a documentação.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>
                                    Link para acesso ao serviço de imigração da Polícia Federal: <TextoLink href="https://www.gov.br/pf/pt-br/assuntos/imigracao" target="_blank">https://www.gov.br/pf/pt-br/assuntos/imigracao </TextoLink>
                                </ParagrafoConteudoTexto>
                                <H3>Conclusão do Atendimento</H3>
                                <ParagrafoConteudo>Se toda a documentação estiver correta e completa, a pessoa migrante receberá:</ParagrafoConteudo>
                                <ul style={{listStyleType: "circle", marginLeft: "3rem"}}>
                                    <ParagrafoConteudo>O número do RNM;</ParagrafoConteudo>
                                    <ParagrafoConteudo>Um protocolo provisório de identificação.</ParagrafoConteudo>
                                </ul>
                                <ParagrafoConteudo>Após essa etapa, basta aguardar a emissão da CRNM, documento oficial de identidade no Brasil.</ParagrafoConteudo>
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