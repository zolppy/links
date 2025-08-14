import { ButtonHTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface Btn extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Btn({
  children,
  type = "button",
  className = "",
  ...props
}: Btn) {
  const baseStyles =
    "bg-white p-4 rounded-full w-full lg:hover:cursor-pointer active:shadow-xl lg:hover:shadow-xl";

  return (
    <button
      {...props}
      type={type}
      className={twMerge(baseStyles, className as ClassNameValue)}
    >
      {children}
    </button>
  );
}

Btn.displayName = "Btn";
