import { about } from "@/data/personal";
import { Container } from "./Container";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <Container>
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
      </Container>
    </section>
  );
}
