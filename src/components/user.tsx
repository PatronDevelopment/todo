import { SignIn } from "@/components/sign-in"
import { SignOut } from "@/components/sign-out"
import { auth } from "@/lib/auth"

 
export async function User() {
  const session = await auth()
 
  if (!session?.user) return <SignIn />
 
  return (
    <div>
      <h2>{session.user.name}</h2>
      <SignOut />
    </div>
  )
}