'use client'
import { useAuth } from '@/hooks/useAuth'

export default function Dashboard(): JSX.Element {
  const { user } = useAuth()

  return (
    <div>
      <h1>Only logged-in users can view this page</h1>
      <p className="font-mono pt-12">{user?.email}</p>
    </div>
  )
}
