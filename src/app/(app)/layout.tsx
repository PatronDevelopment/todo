import { PropsWithChildren } from "react";

import { Navbar } from "@/components/Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative space-y-6 bg-background bg-dot-black/[0.5] dark:bg-dot-white/[0.5] w-full h-[50rem]">
      <Navbar />
      <main className="relative z-20 container">{children}</main>
      <div className="absolute inset-0 flex justify-center items-center bg-background pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
