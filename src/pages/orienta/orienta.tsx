import type React from "react";
import orientaimg from "../../assets/orientacao.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, H3, Paragrafo, ParagrafoConteudo } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import { TextoLink } from "../naturaliza/naturaliza";
import { useEffect } from "react";

const TelaOrienta: React.FC = () => {
    
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
            <IndicadoPag src={orientaimg} tamanho="5vw" titulo="Ajuda e orientação"/>
            <DivTextos>
                <H3>ONGs e Entidades que ajudam:</H3>
                <Paragrafo>
                    No Brasil, temos ONGs (Organizações Não Governamentais), são entidades sem fins lucrativos que atuam de forma independente do governo 
                    e da iniciativa privada para promover causas sociais, ambientais, culturais ou políticas. Além de órgãos que auxiliam na retirada de 
                    dúvidas. 
                </Paragrafo>
                <Paragrafo>Dentre as Organizações Não Governamentais, nós temos:</Paragrafo>
                
                <SanfonaTextos
                    items={[
                        {id: "orienta1", titulo: (<><H2>SJMR (Serviço Jesuíta a Migrantes e Refugiados).</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    Oferece cursos, moradia temporária e apoio jurídico, localizada nos estados de Brasília, Roraima, Amazonas, 
                                    Minas Gerais e Rio Grande do Sul. 
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Acesse o link <TextoLink href="https://sjmrbrasil.org/" target="_blank">https://sjmrbrasil.org/</TextoLink> para mais informações.
                                </ParagrafoConteudo>
                                
                                <H3>Meios de comunicação do Escritório nacional em Brasília (DF):</H3>                     
                                <ParagrafoConteudo>Email: <TextoLink href="mailto:brasilia@sjmrbrasil.org" target="_blank">brasilia@sjmrbrasil.org</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/Nmf6g6xCN6rJtht99" target="_blank">SGAN 601 – Módulo D – Asa Norte - CEP 70.830-012 | Brasília (DF)</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>(61) 3426-0447 ou (61) 99217-5176 – WhatsApp</ParagrafoConteudo>
                                
                                <H3>Meios de comunicação do Escritório em Boa Vista (RR):</H3>                     
                                <ParagrafoConteudo>Email: <TextoLink href="mailto:admbv@sjmrbrasil.org" target="_blank">admbv@sjmrbrasil.org;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/4T2remMfsZVbrmBo7" target="_blank">Av. Gen. Ataíde Teive, 2386 - Dr. Silvio Leite, Boa Vista - RR, 69309-000</TextoLink></ParagrafoConteudo>                    
                                
                                <H3>Meios de comunicação do Escritório em Manaus (AM):</H3>                     
                                <ParagrafoConteudo>Email: <TextoLink href="mailto:coordenadormao@sjmrbrasil.org" target="_blank">coordenadormao@sjmrbrasil.org;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/5yz3g7uw6grXKGPYA" target="_blank">SARES, Av. Leonardo Malcher, 339 – Nossa Sra. Aparecida, Manaus – AM, 69020-070.</TextoLink></ParagrafoConteudo>                    
                                <ParagrafoConteudo>(92) 9227-6936 – Whatsapp</ParagrafoConteudo>
                                
                                <H3>Meios de comunicação do Escritório em Belo Horizonte (MG):</H3>                     
                                <ParagrafoConteudo>Email: <TextoLink href="mailto:coordenadorbh@sjmrbrasil.org" target="_blank">coordenadorbh@sjmrbrasil.org;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/1t2KN8iFnyKrVc5U6" target="_blank">Av. Amazonas, nº 641 –17º andar – Centro - CEP 30180-001 | Belo Horizonte (MG)</TextoLink></ParagrafoConteudo>                    
                                <ParagrafoConteudo>(31) 99677-9690 – Whatsapp</ParagrafoConteudo>

                                <H3>Meios de comunicação do Escritório em São Leopoldo (RS):</H3>                     
                                <ParagrafoConteudo>Email: <TextoLink href="mailto:coordenadorpoa@sjmrbrasil.org" target="_blank">coordenadorpoa@sjmrbrasil.org;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/n5KmbL9KRBJnfvLt7" target="_blank">Av. Unisinos, 950, Cristo Rei, Setor B03 – Sala 106 a 108 - CEP 93022-750 | São Leopoldo(RS)</TextoLink></ParagrafoConteudo>                    
                                <ParagrafoConteudo>(51) 3254-0140 – WhatsApp</ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "orienta2", titulo: (<><H2>Missão paz</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    A Missão Paz é uma instituição que tem como foco acolher e integrar imigrantes, solicitantes de refúgio, 
                                    refugiados e apátridas no Brasil. Situada na cidade de São Paulo, a organização oferece serviços como 
                                    assessoria jurídica, regularização de documentos, suporte na área da saúde, além de capacitação e inserção 
                                    laboral. 
                                </ParagrafoConteudo>
                                <H3>Meios de comunicação:</H3>                     
                                <ParagrafoConteudo>Site: <TextoLink href="https://missaonspaz.org" target="_blank">https://missaonspaz.org;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/qJjXjQqauatLfSvRA" target="_blank">Rua Glicério, 225 - Liberdade - São Paulo/SP;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Telefone: (11) 3340-6950</ParagrafoConteudo>                      
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "orienta3", titulo: (<><H2>ACNUR</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    O ACNUR, a Agência da ONU para Refugiados, é uma organização internacional dedicada a proteger e apoiar os refugiados e outras pessoas 
                                    deslocadas.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                   ACNUR atua promovendo campanhas de conscientização social e apoiando políticas públicas inclusivas. Também facilita a integração social 
                                   de refugiados e migrantes por meio do esporte e de outras iniciativas. 
                                </ParagrafoConteudo>
                                <ParagrafoConteudo> 
                                    A organização também desenvolve projetos voltados para melhorar as condições de vida dessas pessoas, oferecendo capacitação profissional 
                                    e oportunidades de inserção no mercado de trabalho.
                                </ParagrafoConteudo>
                                <H3>Meios de comunicação:</H3>                     
                                <ParagrafoConteudo>Site: <TextoLink href="https://www.acnur.org/br" target="_blank">https://www.acnur.org/br;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: Não possuem atendimento presencial.</ParagrafoConteudo>                      
                                <ParagrafoConteudo>Telefone: (61) 3044-5744</ParagrafoConteudo>               
                                <ParagrafoConteudo>Telefone da unidade de São Paulo: (11) 97639-4070</ParagrafoConteudo>               
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "orienta4", titulo: (<><H2>Abraço cultural</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    A Abraço Cultural é uma instituição com foco na integração cultural, social e econômica por meio do conhecimento linguístico. Com unidades 
                                    nas cidades do Rio de Janeiro e de São Paulo, a organização oferece cursos de idiomas ministrados por professores refugiados e migrantes, 
                                    transformando suas habilidades em ferramentas para geração de renda.
                                </ParagrafoConteudo>
                                <H3>Meios de comunicação:</H3>                     
                                <ParagrafoConteudo>Site: <TextoLink href="https://abracocultural.com.br" target="_blank">https://abracocultural.com.br;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/F8dyjFrzvCkohFYP7" target="_blank">R. dos Pinheiros, 706 - Casa 6 - Pinheiros, São Paulo - SP, 05422-001</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Telefone: (11) 98300-7321</ParagrafoConteudo>           
                            </>
                        ),
                        },
                    ]}
                />
                <br/>
                <H3>Dentre os órgãos que tiram dúvidas, nós temos:</H3>
                <SanfonaTextos
                    items={[
                        {id: "orienta5", titulo: (<><H2>Defensoria Pública do Estado</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    A Defensoria Pública do Estado de São Paulo é uma instituição pública que oferece aos cidadãos e cidadãs vulneráveis, de forma 
                                    integral e gratuita, a orientação jurídica, a promoção dos direitos humanos e a defesa.
                                </ParagrafoConteudo>
                                <H3>Meios de comunicação:</H3>                     
                                <ParagrafoConteudo>Site: <TextoLink href="https://www.defensoria.sp.def.br" target="_blank">https://www.defensoria.sp.def.br;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/Es6QaXasEaqj4cw7A" target="_blank">R. Boa Vista, 150 - Centro Histórico de São Paulo, São Paulo - SP, 01014-000</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Telefone: (11) 3106-4552</ParagrafoConteudo>           
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "orienta6", titulo: (<><H2>Organização Internacional para as Migrações</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudo>
                                    A Organização Internacional para as Migrações (OIM) faz parte do Sistema das Nações Unidas como a principal organização intergovernamental 
                                    que promove a migração humana e ordenada para o benefício de todos. A OIM está presente no Brasil desde 2016.
                                </ParagrafoConteudo>
                                <H3>Meios de comunicação:</H3>                     
                                <ParagrafoConteudo>Site: <TextoLink href="https://brazil.iom.int/pt-br" target="_blank">https://brazil.iom.int/pt-br;</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço Oficial: <TextoLink href="https://maps.app.goo.gl/X6ie1Xf8AG5JGakq7" target="_blank">SAUS Quadra 5 - Bloco N - Ed. OAB, Salas 401 a 412 - Asa Sul CEP: 70070-913, Brasília-DF - Brasil.</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Endereço: <TextoLink href="https://maps.app.goo.gl/XdboX5RbfuHHtSYX8" target="_blank">Rua Teixeira da Silva, 217 - Vila Mariana, CEP: 04002-030 - São Paulo-SP - Brasil</TextoLink></ParagrafoConteudo>                      
                                <ParagrafoConteudo>Telefone unidade São Paulo: (11) 9 9434-9766</ParagrafoConteudo>           
                            </>
                        ),
                        },
                    ]}
                />
            </DivTextos>
        </>
    );
    
}

export default TelaOrienta