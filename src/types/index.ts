export interface NavLink {
  title: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
    facebook: string;
    instagram: string;
  };
  mainNav: NavLink[];
}
