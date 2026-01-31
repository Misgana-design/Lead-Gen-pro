// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold transition-all duration-200 text-center";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
