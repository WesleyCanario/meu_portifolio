import type { ElementType, ReactNode } from "react";

// Container único usado por TODAS as seções — garante largura máxima e
// margens laterais consistentes e simétricas em qualquer tamanho de tela.
export const CONTAINER_CLASSES = "mx-auto max-w-7xl px-6 lg:px-12";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return <Tag className={`${CONTAINER_CLASSES} ${className}`.trim()}>{children}</Tag>;
}
