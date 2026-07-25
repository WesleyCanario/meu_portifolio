export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

// Ordem: mais recente primeiro.
export const experience: ExperienceItem[] = [
  {
    company: "OrthoDontic",
    role: "Analista de Dados",
    period: "dez. 2023 – atual",
    location: "Londrina e Região",
    highlights: [
      "Desenvolvi processos de ETL com Pentaho, otimizando o fluxo de dados.",
      "Criei e implementei um Data Warehouse eficiente com MySQL.",
      "Desenvolvi dashboards interativos no Power BI, incluindo Row Level Security.",
      "Expandi o uso de relatórios e dashboards para toda a rede de franqueados.",
    ],
  },
  {
    company: "Cervejaria Cambé | Chopp Brasser",
    role: "Analista de Dados",
    period: "mar. 2023 – dez. 2023",
    location: "Cambé, PR",
    highlights: [
      "Desenvolvi dashboards no Power BI, reduzindo o tempo de elaboração de relatórios.",
      "Realizei ETL com SQL, Power Query e DAX.",
      "Levantamento de requisitos junto às áreas de negócio.",
    ],
  },
  {
    company: "PAVCOB - Cobranças Empresariais",
    role: "Analista de Dados",
    period: "out. 2021 – mar. 2023",
    location: "Londrina, PR",
    highlights: [
      "Desenvolvi sistema de controle de parcelas com Power Apps, automatizando processos manuais.",
      "Automatizei processos em planilhas Excel via Pentaho.",
      "Criei dashboards no Power BI para acompanhamento do CRM Pipe Drive, incluindo consumo de API.",
    ],
  },
  {
    company: "Grupo RFK",
    role: "Analista de Sistema",
    period: "jan. 2020 – set. 2021",
    location: "Londrina, PR",
    highlights: [
      "Atendimento e suporte a usuários, testes e documentação técnica.",
      "Consultas em SQL para identificação e resolução de problemas, geração de relatórios.",
    ],
  },
  {
    company: "Grupo RFK",
    role: "Assistente Comercial",
    period: "abr. 2017 – jan. 2020",
    location: "Cambé, PR",
    highlights: [
      "Análise de margem, preço médio, tendências e faturamento em Excel.",
      "Cadastro de clientes e suporte à equipe de vendas.",
    ],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    institution: "Descomplica Faculdade Digital",
    degree: "Pós-graduação Lato Sensu em Análise de Dados",
    period: "2021 – 2022",
  },
  {
    institution: "UNOPAR",
    degree: "Bacharel em Tecnologia (BTech), Análise e Desenvolvimento de Sistemas",
    period: "2019 – 2021",
  },
  {
    institution: "FAAT Ensino",
    degree: "Bacharel em Administração",
    period: "2009 – 2012",
  },
];

export const certifications: string[] = [
  "Produtividade e Gestão do Tempo",
  "Modelagem de Dados Essencial 2.0",
  "Linguagem DAX Essencial 2.0",
  "Power Query Essencial 2.0",
];
