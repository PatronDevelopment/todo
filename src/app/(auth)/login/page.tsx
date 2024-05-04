import { SignIn } from "@/components/sign-in";

export default function Page() {
  return (
    <div className="max-w-xl text-center space-y-6">
      <h1 className="text-6xl font-bold">Welcome to Todolist</h1>
      <SignIn />
    </div>
  )
}