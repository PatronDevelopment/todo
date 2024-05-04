import { UserMenu } from "@/components/user/menu";
import { auth } from "@/lib/auth";

export async function User() {
  const session = await auth();

  if (!session?.user) return null;

  return <UserMenu user={session.user} />;
}
