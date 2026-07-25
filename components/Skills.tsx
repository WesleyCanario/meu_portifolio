import type { CSSProperties, ComponentType } from "react";
import { AppWindow, ChartBar, Database, GitMerge, Server, ShieldCheck, Sigma, Table2, Workflow } from "lucide-react";
import { SiGit, SiMysql, SiPython } from "react-icons/si";
import { skills } from "@/data/skills";
import { Container } from "./Container";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

type SkillIcon = { icon: ComponentType<{ className?: string; style?: CSSProperties }>; color: string };

// Ícones oficiais de marca quando disponíveis (Python, MySQL, Git); nos demais
// itens (sem logo oficial disponível na biblioteca), usamos um ícone genérico
// tingido com a cor oficial da ferramenta.
const SKILL_ICONS: Record<string, SkillIcon> = {
  "Power BI": { icon: ChartBar, color: "#F2C811" },
  DAX: { icon: Sigma, color: "#3B82F6" },
  "Power Query (M)": { icon: Workflow, color: "#3B82F6" },
  "Excel avançado": { icon: Table2, color: "#217346" },
  Pentaho: { icon: GitMerge, color: "#F07C24" },
  SQL: { icon: Database, color: "#3B82F6" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  "Data Warehouse": { icon: Server, color: "#3B82F6" },
  "Python (em aprofundamento)": { icon: SiPython, color: "#3776AB" },
  Git: { icon: SiGit, color: "#F05032" },
  "Power Apps": { icon: AppWindow, color: "#742774" },
  "Row Level Security (RLS)": { icon: ShieldCheck, color: "#3B82F6" },
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-200/60 py-20 sm:py-28 dark:border-zinc-800/60">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Ferramentas"
            title="Skills"
            subtitle="Ferramentas e tecnologias que uso no dia a dia para transformar dados em decisões."
          />
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <RevealOnScroll key={group.category} delayMs={index * 80}>
              <div className="group h-full rounded-xl border border-zinc-200 bg-white/60 p-6 transition-all hover:border-secondary/50 hover:shadow-[0_0_28px_-10px_rgba(59,130,246,0.5)] dark:border-zinc-800 dark:bg-zinc-900/40">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => {
                    const entry = SKILL_ICONS[item];
                    const Icon = entry?.icon;
                    return (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                        {Icon && (
                          <Icon
                            className="h-4 w-4 shrink-0"
                            style={{ color: entry.color }}
                          />
                        )}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
