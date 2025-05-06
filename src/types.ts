export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  code?: string;
  language?: string;
}

export interface CodeSnippet {
  code: string;
  language: string;
  fileName?: string;
}