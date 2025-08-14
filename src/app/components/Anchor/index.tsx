import { AnchorHTMLAttributes, ReactNode } from "react";

interface Anchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Anchor({
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: Anchor) {
  return (
    <a
      {...props}
      target={target}
      rel={rel}
      className="bg-white p-4 text-center rounded-full w-full lg:hover:cursor-pointer active:shadow-xl lg:hover:shadow-xl"
    >
      {children}
    </a>
  );
}

Anchor.displayName = "Anchor";
