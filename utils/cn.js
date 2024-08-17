import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => twMerge(clsx(inputs));
