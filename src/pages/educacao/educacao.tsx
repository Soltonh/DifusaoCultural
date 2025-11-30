import type React from "react";
import educaimg from "../../assets/educacao.png"
import IndicadoPag from "../../components/IndicadorPag/IndicadorPag"
import { DivTextos, H2, H3, Paragrafo, ParagrafoConteudo, ParagrafoConteudoLink, ParagrafoConteudoTexto } from "../saude/saude";
import { SanfonaTextos } from "../../components/SanfonaTextos/Sanfonatextos";
import { A, ParagrafoLinkPonto } from "./educacao";
import { useEffect } from "react";
import { TextoLink } from "../naturaliza/naturaliza";

const TelaEduca: React.FC = () => {

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
            <IndicadoPag src={educaimg} tamanho="5vw" titulo="Educação no Brasil"/>
            <DivTextos>
                <Paragrafo>
                    Se você chegou recentemente ao Brasil, saiba que a educação é um direito garantido a todas 
                    as pessoas, brasileiras ou não, independentemente da nacionalidade ou da situação migratória.
                </Paragrafo>
                <SanfonaTextos
                    items={[
                        {id: "educa1", titulo: (<><H2>Como aprender português.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Aprender português é um passo essencial para a integração social, profissional e educacional.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Diversas escolas públicas, universidades e organizações sociais oferecem cursos gratuitos de 
                                    português para imigrantes e refugiados, conhecidos como Português como Língua de Acolhimento (PLA).
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Onde procurar:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Secretarias municipais ou estaduais de educação;</ParagrafoConteudo>
                                <ParagrafoConteudo>Universidades públicas e Institutos Federais;</ParagrafoConteudo>
                                <ParagrafoConteudo>ONGs parceiras do ACNUR (Agência da ONU para Refugiados);</ParagrafoConteudo>
                                <ParagrafoConteudo>Centros de referência como CRAI e Cáritas;</ParagrafoConteudo>                               
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "educa2", titulo: (<><H2>Educação infantil, fundamental e média.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    O sistema educacional brasileiro é dividido em três etapas principais: Educação Infantil, Ensino Fundamental e Ensino Médio
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>A Educação Infantil é voltada a crianças de até <A>5 anos</A> (creche e pré-escola).</ParagrafoConteudo>
                                <ParagrafoConteudo>O Ensino Fundamental atende estudantes de <A>6 a 14 anos.</A></ParagrafoConteudo>
                                <ParagrafoConteudo>O Ensino Médio vai dos <A>15 aos 17 anos.</A></ParagrafoConteudo>    
                                <ParagrafoConteudoTexto>
                                    A matrícula nas escolas públicas é gratuita e pode ser feita mesmo que a família ainda não possua 
                                    todos os documentos brasileiros. Para realizar a matrícula, procure a escola pública mais próxima de você. 
                                </ParagrafoConteudoTexto>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "educa3", titulo: (<><H2>Documentos necessários para realização da matrícula escolar.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Os documento mais pedidos geralmente são: 
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    <A>Documento de Identidade:</A> Pode ser o RNE (Registro Nacional de Estrangeiro), CRNM (Carteira de 
                                    Registro Nacional Migratório), passaporte, protocolo de refúgio ou até mesmo um documento do 
                                    seu país de origem.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    <A>Comprovante de Residência:</A> Uma conta de luz, água ou aluguel (mesmo que não esteja no seu nome, 
                                    muitos locais aceitam uma declaração).
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    <A>Carteira de Vacinação da Criança:</A> É muito importante mantê-la atualizada.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudo>
                                    <A>Histórico Escolar (se tiver):</A> Documentos da escola anterior no seu país de origem.
                                </ParagrafoConteudo> 
                                <ParagrafoConteudoTexto>
                                    Caso não tenha alguns desses documentos, não se preocupe, isso não impedirá que a matrícula da 
                                    criança ou adolescente seja realizada. Caso alguma escola recuse a matrícula, procure a Secretaria 
                                    Municipal ou Estadual de Educação, que deve garantir o acesso imediato. 
                                </ParagrafoConteudoTexto>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "educa4", titulo: (<><H2>Educação para jovens e adultros - EJA</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Se você é adulto e não teve a oportunidade de concluir os estudos, pode participar da Educação de Jovens e Adultos.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Esse programa permite terminar o ensino fundamental e médio de forma gratuita e em horários flexíveis, 
                                    geralmente noturnos. Basta procurar uma escola pública que ofereça a modalidade EJA na sua região.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    A EJA também é aberta a imigrantes, mesmo que ainda estejam regularizando documentos.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Aqui vão 3 locais que oferecem o ensino EJA em São Paulo:
                                </ParagrafoConteudoTexto>
                                <TextoLink href="https://www.sesisp.org.br/educacao/nova-eja" target="_blank">
                                    <ParagrafoLinkPonto>
                                        SESI: https://www.sesisp.org.br/educacao/nova-eja - telefone: 0800 876 8894 
                                    </ParagrafoLinkPonto>
                                </TextoLink>
                                <TextoLink href="https://eja.cps.sp.gov.br/ejacps/" target="_blank">
                                    <ParagrafoLinkPonto>
                                        Centro Paula Souza: https://eja.cps.sp.gov.br/ejacps/
                                    </ParagrafoLinkPonto>
                                </TextoLink>
                                <TextoLink href="https://www.sesc.com.br/atuacoes/educacao/educacao-a-distancia/" target="_blank">
                                    <ParagrafoLinkPonto>
                                        SESC: https://www.sesc.com.br/atuacoes/educacao/educacao-a-distancia/ - telefone:  0800 222 7094 
                                    </ParagrafoLinkPonto>
                                </TextoLink>
                            </>
                        ),
                        },
                    ]}
                />
                <SanfonaTextos
                    items={[
                        {id: "educa5", titulo: (<><H2>Revalidação de diplomas estrangeiros.</H2></>), 
                        conteudo: 
                        (
                            <>
                                <ParagrafoConteudoTexto>
                                    Se você estudou fora do Brasil e já tem um diploma universitário, pode revalidar esse diploma para 
                                    que ele tenha validade oficial no Brasil.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Esse processo é fundamental para que você possa trabalhar na sua área de formação, prestar concursos
                                    públicos, continuar os estudos (pós-graduação, mestrado ou doutorado) ou registrar sua profissão em 
                                    conselhos de classe.
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    A revalidação é feita por universidades públicas brasileiras que oferecem cursos da mesma área e 
                                    nível de formação do seu diploma.
                                </ParagrafoConteudoTexto>
                                <H3>Quem pode solicitar:</H3>
                                <ParagrafoConteudoTexto>
                                    Qualquer pessoa que tenha concluído um curso de nível superior em outro país pode pedir a revalidação, 
                                    inclusive:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Migrantes com residência temporária ou permanente;</ParagrafoConteudo>
                                <ParagrafoConteudo>Refugiados, asilados políticos e apátridas;</ParagrafoConteudo>
                                <ParagrafoConteudo>Brasileiros que estudaram no exterior e voltaram ao país.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>Não há restrições por nacionalidade ou status migratório.</ParagrafoConteudoTexto>
                                <H3>Passo a passo para revalidar o diploma:</H3>
                                <ParagrafoConteudoTexto>1 - Acesse o site:</ParagrafoConteudoTexto>
                                <a href="https://carolinabori.mec.gov.br" target="_blank">
                                    <ParagrafoConteudoLink>
                                        Entre no site: https://carolinabori.mec.gov.br e crie seu cadastro.
                                    </ParagrafoConteudoLink>
                                </a>
                                <ParagrafoConteudoTexto>2 - Escolha a universidade:</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Pesquise uma universidade pública brasileira que tenha um curso equivalente
                                    ao seu diploma (por exemplo, Medicina → Universidade que tenha curso de Medicina 
                                    reconhecido pelo MEC).
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>3 - Envie os documentos exigidos:</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>Geralmente são pedidos:</ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Diploma estrangeiro;</ParagrafoConteudo>
                                <ParagrafoConteudo>Histórico escolar do curso;</ParagrafoConteudo>
                                <ParagrafoConteudo>Ementas e programas das disciplinas cursadas;</ParagrafoConteudo>
                                <ParagrafoConteudo>Cópia do passaporte, RNE, CRNM ou outro documento de identificação;</ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Comprovante de tradução juramentada dos documentos (feita por tradutor 
                                    autorizado no Brasil);
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>Comprovação de autenticação consular ou Apostila de Haia, se aplicável.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>4 - A universidade analisa o pedido:</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                   Ela verifica se o curso feito no exterior tem carga horária e conteúdo compatíveis com o curso 
                                   brasileiro. Caso falte alguma equivalência, pode ser solicitado:
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudo>Exame complementar:</ParagrafoConteudo>
                                <ParagrafoConteudo>Trabalho ou estágio adicional:</ParagrafoConteudo>
                                <ParagrafoConteudo>Disciplina de nivelamento.</ParagrafoConteudo>
                                <ParagrafoConteudoTexto>5 - Receba o resultado:</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>O prazo médio do processo é de 6 meses a 1 ano.</ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>
                                    Após a aprovação, a universidade emite o ato de revalidação, e o diploma 
                                    passa a ter validade nacional.
                                </ParagrafoConteudoTexto>
                                <H3>Tradução juramentada e legalização</H3>
                                <ParagrafoConteudoTexto>
                                    Tradução juramentada é a tradução oficial exigida por órgãos públicos. Deve ser feita por um 
                                    tradutor público juramentado no Brasil (procure no site da Junta Comercial do seu estado).
                                </ParagrafoConteudoTexto>
                                <ParagrafoConteudoTexto>Legalização consular ou Apostila de Haia:</ParagrafoConteudoTexto>
                                <ParagrafoConteudo>
                                    Se o país onde o diploma foi emitido participa da Convenção da Haia, basta apostilar o documento 
                                    antes de trazê-lo ao Brasil.
                                </ParagrafoConteudo>
                                <ParagrafoConteudo>
                                    Se não participa, o documento deve ser legalizado no consulado brasileiro do país de origem.
                                </ParagrafoConteudo>
                            </>
                        ),
                        },
                    ]}
                />
            </DivTextos>
        </>
    );
    
}

export default TelaEduca