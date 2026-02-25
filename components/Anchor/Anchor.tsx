import { AnchorHTMLAttributes } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function Anchor({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const defaultStyle: ClassNameValue =
    "bg-white p-4 text-center rounded-full w-full lg:hover:cursor-pointer active:shadow-xl lg:hover:shadow-xl";

  return (
    <a {...props} className={twMerge(defaultStyle, className)}>
      {children}
    </a>
  );
}
