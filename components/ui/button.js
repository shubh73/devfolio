"use client";

import { cn } from "utils/cn";

// const buttonVariants = {
//   primary:
//     "outline-indigo-dark hover:shadow-[0_0_16px_theme(colors.indigo.dark)] active:shadow-[0_0_16px_theme(colors.indigo.dark)]",
//   secondary:
//     "outline-white hover:shadow-[0_0_16px_theme(colors.gray.dark.5)] active:shadow-[0_0_16px_theme(colors.gray.dark.5)]",
// };

// export const Button = ({
//   href,
//   onClick,
//   children,
//   className,
//   variant = "primary",
//   disabled,
//   ...otherProps
// }) => {
//   const variantStyles = buttonVariants[variant];

//   return (
//     <a
//       href={href}
//       onClick={onClick}
//       className={cn(
//         "relative inline-flex items-center rounded-md bg-[linear-gradient(_120deg,transparent_0%,transparent_50%,theme(colors.purple)_50%_)] bg-[length:220%] bg-clip-padding px-[28px] py-[10px] font-mono text-sm font-extrabold no-underline outline outline-2 transition-all duration-300 ease-in-out hover:bg-[100%] active:bg-[100%]",
//         variantStyles,
//         className,
//       )}
//       {...otherProps}
//     >
//       {children}
//     </a>
//   );
// };

import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-mono font-medium ring-offset-purple transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple focus-visible:ring-offset-1 cursor-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:text-purple hover:bg-gray-dark-3",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-purple hover:bg-gray-dark-3 hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
        icon: "hover:text-purple hover:bg-gray-dark-3",
      },
      size: {
        default: "h-10 px-4 py-2",
        // sm: "h-9 rounded-md px-3",
        // lg: "h-11 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
