import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant="secondary">
        <Icons.gitHub className="size-5 mr-2"/>
        Sign in with GitHub
      </Button>
    </form>
  );
}
