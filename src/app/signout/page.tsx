'use client'
import { signOut } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function SignOutPage(): JSX.Element {
  const router = useRouter()

  const handleSignOut = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const { result, error } = await signOut()

    if (error) {
      console.log(error)
      return
    }

    console.log(result)

    router.push('/')
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Sign Out</h1>
      <Button variant={'outline'} className="border-2 border-gray-700 p-2" onClick={handleSignOut}>
        Sign Out
      </Button>
    </>
  )
}
