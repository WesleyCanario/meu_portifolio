export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  inProgress?: boolean;
};

// TODO: substituir pelos projetos reais quando estiverem prontos.
// Basta adicionar/editar itens neste array — o layout dos cards já está pronto
// e se adapta automaticamente à quantidade e ao conteúdo de cada projeto.
export const projects: Project[] = [
  {
    title: "Projeto em andamento",
    description:
      "Estudo de caso de análise de dados em desenvolvimento. Em breve, detalhes sobre o problema, a solução e os resultados.",
    tags: ["Power BI", "SQL"],
    inProgress: true,
  },
  {
    title: "Projeto em andamento",
    description:
      "Novo case prático envolvendo ETL e dashboards interativos está sendo preparado para publicação.",
    tags: ["ETL", "Dashboards"],
    inProgress: true,
  },
  {
    title: "Projeto em andamento",
    description:
      "Mais um estudo de caso de análise de dados a caminho. Volte em breve para conferir.",
    tags: ["Dados", "Insights"],
    inProgress: true,
  },
];
