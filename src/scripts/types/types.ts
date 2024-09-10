import type { HTMLAttributes } from "astro/types";

export type BaseProps = {
  id?: string;
  classNames?: string | string[];
  lang?: string;
}

export type HeaderItem = HTMLAttributes<'a'> & {
  ariaLabel: string;
  iconClassNames: string[];
  menuText: string;
}

export type SocialItem = Omit<HeaderItem, 'menuText'>

export type Interest = {
  title: string;
  description: string;
  iconClassNames: string[];
}

export type Experience = {
  company: string;
  position: string;
  description: string;
  range: string;
  informationItems: string[];
  isCurrent?: boolean;
}

export type Technology = {
  text: string;
  iconClassNames: string[];
}

export type Project = {
  order: number;
  id: string;
  title: string;
  type: string;
  typeText: string;
  links: ProjectLink[];
  descriptions: string[];
  tags: string[];
  technologies: Technology[];
}

export type ProjectLink = {
  link: string;
  text: string;
  type: string;
  iconClassNames: string[];
}