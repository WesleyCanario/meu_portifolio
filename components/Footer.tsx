import { personal } from "@/data/personal";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row dark:text-zinc-500">
        <p>
          © {year} {personal.name}. Todos os direitos reservados.
        </p>
        <a href="#top" className="hover:text-secondary-dark dark:hover:text-secondary-light">
          Voltar ao topo
        </a>
      </Container>
    </footer>
  );
}
