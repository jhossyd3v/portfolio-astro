import type { HTMLAttributes } from "astro/types";

export type BaseProps = {
  id?: string;
  className?: string | string[];
  lang?: string;
}

export type HeaderItem = HTMLAttributes<'a'> & {
  ariaLabel: string;
  iconClassName: string[];
  menuText: string;
}