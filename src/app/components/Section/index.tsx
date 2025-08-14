import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface Section extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({ children, className = "", ...props }: Section) {
  const baseStyles = "flex flex-col gap-y-4";

  return (
    <section
      {...props}
      className={twMerge(baseStyles, className as ClassNameValue)}
    >
      {children}
    </section>
  );
}

Section.displayName = "Section";
