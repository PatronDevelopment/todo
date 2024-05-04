import { signOut } from "@/lib/auth";

export function SignOut({ className }: { className?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className={className}>
        Sign Out
      </button>
    </form>
  );
}
