import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Todo List",
  description: "Lorem ipsum",
  url: process.env.VERCEL_URL ?? "http://localhost:3000",
  mainNav: [
    {
      href: "/overview",
      title: "Overview",
    },
  ],
  links: {
    facebook: "",
    github: "",
    instagram: "",
    twitter: "",
  },
};
