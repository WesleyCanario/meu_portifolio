import { about } from "@/data/personal";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <RevealOnScroll>
          <SectionHeading eyebrow="Sobre" title="Quem sou eu" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
