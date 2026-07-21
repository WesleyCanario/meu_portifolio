import { skills } from "@/data/skills";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-100 py-24 sm:py-32 dark:border-zinc-900">
      <div className="mx-auto max-w-content px-6 sm:px-8">
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
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
