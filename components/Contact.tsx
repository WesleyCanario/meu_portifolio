import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { personal } from "@/data/personal";
import { RevealOnScroll } from "./RevealOnScroll";
import { SectionHeading } from "./SectionHeading";

const CONTACT_LINKS = [
  {
    label: "E-mail",
    value: personal.email,
    href: personal.links.email,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Enviar mensagem",
    href: personal.links.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "wesley-da-costa-canario",
    href: personal.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Ver repositórios",
    href: personal.links.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contato" className="border-t border-zinc-100 py-24 sm:py-32 dark:border-zinc-900">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar"
            subtitle="Aberto a novas oportunidades e projetos na área de dados. Escolha o canal que preferir."
          />
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                  <link.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{link.label}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            {personal.location}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
