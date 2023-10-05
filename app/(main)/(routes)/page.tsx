import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs/app-beta"


export default function Home() {
  return(
    <div className=' text-3xl font-bold text-indigo-500'>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
