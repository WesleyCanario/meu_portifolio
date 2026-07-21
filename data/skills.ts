export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "BI & Visualização",
    items: ["Power BI", "DAX", "Power Query (M)", "Excel avançado"],
  },
  {
    category: "ETL & Dados",
    items: ["Pentaho", "SQL", "MySQL", "Data Warehouse"],
  },
  {
    category: "Linguagens",
    items: ["Python (em aprofundamento)"],
  },
  {
    category: "Outros",
    items: ["Git", "Power Apps", "Row Level Security (RLS)"],
  },
];
