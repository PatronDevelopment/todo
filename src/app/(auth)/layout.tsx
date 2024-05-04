import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
  return (
    <main className="h-screen flex items-center justify-center">{children}</main>
  )
}