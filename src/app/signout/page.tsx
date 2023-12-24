'use client'
import { signOut } from '@/firebase/auth/signOut'
import { useRouter } from 'next/navigation'

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
    <div className="flex justify-center items-center h-screen text-black">
      <div className="w-96 bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Sign Out</h1>
        <button className="border-2 border-gray-700 p-2" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
