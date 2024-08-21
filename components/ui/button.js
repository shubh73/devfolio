"use client";

import { cn } from "utils/cn";

const buttonVariants = {
  primary:
    "outline-indigo-dark hover:shadow-[0_0_16px_theme(colors.indigo.dark)] active:shadow-[0_0_16px_theme(colors.indigo.dark)]",
  secondary:
    "outline-white hover:shadow-[0_0_16px_theme(colors.gray.dark.5)] active:shadow-[0_0_16px_theme(colors.gray.dark.5)]",
};

export const Button = ({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  disabled,
  ...otherProps
}) => {
  const variantStyles = buttonVariants[variant];

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center rounded-md bg-[linear-gradient(_120deg,transparent_0%,transparent_50%,theme(colors.purple)_50%_)] bg-[length:220%] bg-clip-padding px-[28px] py-[10px] font-mono text-sm font-extrabold no-underline outline outline-2 transition-all duration-300 ease-in-out hover:bg-[100%] active:bg-[100%]",
        variantStyles,
        className,
      )}
      {...otherProps}
    >
      {children}
    </a>
  );
};
