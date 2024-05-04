import Image from "next/image";
import Link from "next/link";

import { Input } from "./ui/input";
import { User } from "./user";

export const Navbar = () => {
  return (
    <div className="top-0 z-50 sticky flex justify-between items-center bg-background/20 backdrop-blur-sm px-6 py-3 border-b border-border w-full">
      {/* Logo */}
      <Link href={"/"} className="flex gap-2">
        <Image src="/icon/logo.icon.svg" alt="logo" width={20} height={20} />
        <h1 className="font-extrabold text-secondary">ToDo</h1>
      </Link>

      <section className="flex gap-2">
        {/* Search bar */}
        <section>
          <Input
            className="bg-muted focus:bg-background border-none h-8 text-input text-sm transition-all duration-75"
            placeholder="Search projects..."
          />
        </section>

        {/* Profile */}
        <section className="flex justify-center items-center bg-primary rounded-full w-8 text-input">
          <User />
        </section>
      </section>
    </div>
  );
};
