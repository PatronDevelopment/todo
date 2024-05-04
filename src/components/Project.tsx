import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { projectType } from "@/types/types";

import { StatusBadge } from "./StatusBadge";

export const Project = ({ id, title, status }: projectType) => {
  return (
    <Link href={`/${id}`}>
      <Card className="relative hover:brightness-150 flex flex-grow justify-between items-start bg-muted lg:min-h-40 transition-all">
        <CardHeader>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
          <StatusBadge status={status} />
        </CardHeader>
        <CardHeader className="absolute flex items-end hover:scale-105 w-full h-full transition-transform">
          <Image
            src={"/icon/chevronRight.icon.svg"}
            className="min-w-[20px]"
            width={20}
            height={20}
            alt="open project"
          />
        </CardHeader>
      </Card>
    </Link>
  );
};
