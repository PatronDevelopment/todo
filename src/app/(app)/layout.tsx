import Link from "next/link";
import { PropsWithChildren } from "react";

import { User } from "@/components/user";
import { siteConfig } from "@/config/site";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-[50rem] w-full bg-background dark:bg-dot-white/[0.5] bg-dot-black/[0.5] relative space-y-6">
      <header className="sticky top-0 z-50 w-full border-b bg-background/20 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <h1>Logo</h1>
          <nav className="flex flex-1 items-center justify-end gap-4">
            {siteConfig.mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Overview
              </Link>
            ))}

            <User />
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
