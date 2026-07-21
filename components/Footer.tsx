import { personal } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-100 py-10 dark:border-zinc-900">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 sm:flex-row sm:px-8 dark:text-zinc-500">
        <p>
          © {year} {personal.name}. Todos os direitos reservados.
        </p>
        <a href="#top" className="hover:text-zinc-600 dark:hover:text-zinc-300">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
