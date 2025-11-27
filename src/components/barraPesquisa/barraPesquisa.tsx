// SearchBar.tsx
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type SearchItem = {
  id: string;
  label: string;
  path: string;
  keywords: string[];
};

export const SEARCH_ITEMS: SearchItem[] = [
  // ----- SAÚDE -----
  {
    id: "saude",
    label: "Saúde - Página principal",
    path: "/saude",
    keywords: ["saude", "atendimento médico", "sus"]
  },
  {
    id: "saude1",
    label: "Saúde - Onde buscar atendimento?",
    path: "/saude#saude1",
    keywords: ["onde buscar atendimento", "posto", "hospital", "ubs", "pronto socorro"]
  },
  {
    id: "saude2",
    label: "Saúde - Como ser atendido?",
    path: "/saude#saude2",
    keywords: ["como ser atendido", "cartão sus", "cadastro"]
  },
  {
    id: "saude3",
    label: "Saúde - Serviços e tratamentos oferecidos",
    path: "/saude#saude3",
    keywords: ["serviços", "tratamentos", "consultas", "exames"]
  },
  {
    id: "saude4",
    label: "Saúde - Telefones e links úteis",
    path: "/saude#saude4",
    keywords: ["telefones", "links", "contato", "telefone"]
  },

  // ----- EDUCAÇÃO -----
  {
    id: "educa",
    label: "Educação - Página principal",
    path: "/educa",
    keywords: ["educacao", "escola", "estudo"]
  },
  {
    id: "educa1",
    label: "Educação - Como aprender português",
    path: "/educa#educa1",
    keywords: ["aprender portugues", "curso de portugues"]
  },
  {
    id: "educa2",
    label: "Educação - Educação infantil, fundamental e média",
    path: "/educa#educa2",
    keywords: ["educacao infantil", "fundamental", "medio", "ensino medio", "escola"]
  },
  {
    id: "educa3",
    label: "Educação - Documentos para matrícula escolar",
    path: "/educa#educa3",
    keywords: ["matricula", "documentos", "escola", "inscricao"]
  },
  {
    id: "educa4",
    label: "Educação - Educação para jovens e adultos (EJA)",
    path: "/educa#educa4",
    keywords: ["eja", "jovens e adultos", "supletivo"]
  },
  {
    id: "educa5",
    label: "Educação - Revalidação de diplomas estrangeiros",
    path: "/educa#educa5",
    keywords: ["revalidacao", "diploma", "diplomas estrangeiros", "universidade"]
  },

  // ----- NATURALIZAÇÃO -----
  {
    id: "naturaliza",
    label: "Naturalização - Página principal",
    path: "/naturaliza",
    keywords: ["naturalizacao", "cidadania", "nacionalidade"]
  },
  {
    id: "naturaliza1",
    label: "Naturalização - Naturalização ordinária",
    path: "/naturaliza#naturaliza1",
    keywords: ["ordinaria", "naturalizacao ordinaria"]
  },
  {
    id: "naturaliza2",
    label: "Naturalização - Hipóteses de redução de prazo",
    path: "/naturaliza#naturaliza2",
    keywords: ["reducao prazo", "tempo de residencia"]
  },
  {
    id: "naturaliza3",
    label: "Naturalização - Extraordinária, especial, provisória e definitiva",
    path: "/naturaliza#naturaliza3",
    keywords: ["extraordinaria", "especial", "provisoria", "definitiva"]
  },
  {
    id: "naturaliza4",
    label: "Naturalização - Como solicitar a naturalização",
    path: "/naturaliza#naturaliza4",
    keywords: ["como solicitar", "pedido", "requerimento"]
  },
  {
    id: "naturaliza5",
    label: "Naturalização - Documentos mais solicitados",
    path: "/naturaliza#naturaliza5",
    keywords: ["documentos", "documentacao", "certidoes"]
  },
  {
    id: "naturaliza6",
    label: "Naturalização - Regularização migratória",
    path: "/naturaliza#naturaliza6",
    keywords: ["regularizacao", "migratoria", "registro", "situacao migratoria"]
  },

  // ----- ASSISTÊNCIA SOCIAL -----
  {
    id: "assistencia",
    label: "Assistência Social - Página principal",
    path: "/assistencia",
    keywords: ["assistencia social", "cras", "creas"]
  },
  {
    id: "assistencia1",
    label: "Assistência Social - MDS",
    path: "/assistencia#assistencia1",
    keywords: ["mds", "ministerio desenvolvimento", "familia", "combate a fome"]
  },
  {
    id: "assistencia2",
    label: "Assistência Social - Rede de acolhimento",
    path: "/assistencia#assistencia2",
    keywords: ["rede de acolhimento", "abrigo", "acolhimento"]
  },
  {
    id: "assistencia3",
    label: "Assistência Social - Programas sociais do governo",
    path: "/assistencia#assistencia3",
    keywords: ["bolsa familia", "programas sociais", "beneficios"]
  },
  {
    id: "assistencia4",
    label: "Assistência Social - Pessoas em situação de rua",
    path: "/assistencia#assistencia4",
    keywords: ["situacao de rua", "morador de rua", "acolhimento rua"]
  },

  // ----- DOCUMENTAÇÃO -----
  {
    id: "documentos",
    label: "Documentação - Página principal",
    path: "/documentos",
    keywords: ["documentacao", "documentos", "registro"]
  },
  {
    id: "documentos1",
    label: "Documentação - Registro nacional de estrangeiros (RNE)",
    path: "/documentos#documentos1",
    keywords: ["rne", "registro nacional de estrangeiros"]
  },
  {
    id: "documentos2",
    label: "Documentação - CRNM",
    path: "/documentos#documentos2",
    keywords: ["crnm", "carteira de registro nacional migratorio"]
  },
  {
    id: "documentos3",
    label: "Documentação - DPRNM",
    path: "/documentos#documentos3",
    keywords: ["dprnm", "documento provisorio"]
  },
  {
    id: "documentos4",
    label: "Documentação - Protocolo de Solicitação de Refúgio",
    path: "/documentos#documentos4",
    keywords: ["protocolo", "refugio", "solicitacao de refugio"]
  },

  // ----- AJUDA E ORIENTAÇÃO -----
  {
    id: "orienta",
    label: "Ajuda e orientação - Página principal",
    path: "/orienta",
    keywords: ["ajuda", "orientacao", "apoio"]
  },
  {
    id: "orienta1",
    label: "Ajuda e orientação - SJMR",
    path: "/orienta#orienta1",
    keywords: ["sjmr", "servico jesuita", "migrantes", "refugiados"]
  },
  {
    id: "orienta2",
    label: "Ajuda e orientação - Missão Paz",
    path: "/orienta#orienta2",
    keywords: ["missao paz"]
  },
  {
    id: "orienta3",
    label: "Ajuda e orientação - ACNUR",
    path: "/orienta#orienta3",
    keywords: ["acnur", "onu refugiados"]
  },
  {
    id: "orienta4",
    label: "Ajuda e orientação - Abraço Cultural",
    path: "/orienta#orienta4",
    keywords: ["abraco cultural", "curso", "portugues", "intercultural"]
  },
  {
    id: "orienta5",
    label: "Ajuda e orientação - Defensoria Pública da DPU",
    path: "/orienta#orienta5",
    keywords: ["dpu", "defensoria publica da uniao", "ajuda juridica"]
  },
  {
    id: "orienta6",
    label: "Ajuda e orientação - Organização Internacional para as Migrações",
    path: "/orienta#orienta5", // mesmo anchor que você já usou
    keywords: ["oim", "organizacao internacional para as migracoes"]
  }
];

// container inteiro da barra
export const SearchWrapper = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 1rem auto;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 1px solid #000;
  border-radius: 999px;
  padding: 0.5rem 1.25rem;

  background-color: #fff;
`;

// ícone da lupa
export const SearchIcon = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: black;
`;

// input
export const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
    color: #555;

  &::placeholder {
    color: #555;
  }
`;

// botão do X (limpar)
export const ClearButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }
`;
const ResultsList = styled.ul`
  width: 100%;
  max-width: 900px;
  margin: 0.5rem auto 0;
  padding: 0;
  list-style: none;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const ResultItem = styled.li`
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #f2f4ff;
  }
`;

const EmptyResult = styled.li`
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: #777;
`;

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered: SearchItem[] = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return SEARCH_ITEMS.filter((item) => {
      const text = (item.label + " " + item.keywords.join(" ")).toLowerCase();
      return text.includes(q);
    });
  }, [query]);

  const handleSelect = (item: SearchItem) => {
    setQuery("");
    navigate(item.path);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && filtered.length > 0) {
      e.preventDefault();
      handleSelect(filtered[0]);
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchIcon
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" 
                stroke-linecap="round" 
                stroke-width="2" 
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </SearchIcon>

        <SearchInput
          type="text"
          placeholder="O que você procura?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {query && <ClearButton onClick={() => setQuery("")}>×</ClearButton>}
      </SearchWrapper>

      {/* LISTA DE RESULTADOS */}
      {query.trim() && (
        <ResultsList>
          {filtered.length === 0 ? (
            <EmptyResult>Nenhum resultado encontrado.</EmptyResult>
          ) : (
            filtered.map((item) => (
              <ResultItem key={item.id} onClick={() => handleSelect(item)}>
                {item.label}
              </ResultItem>
            ))
          )}
        </ResultsList>
      )}
    </>
  );
};

export default SearchBar;