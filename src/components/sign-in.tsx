
import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button type="submit">Signin with GitHub</Button>
    </form>
  )
} 