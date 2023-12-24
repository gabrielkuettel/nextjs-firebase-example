'use client'
import { useAuth } from '@/hooks/useAuth'

export default function DashboardPage(): JSX.Element {
  const { user } = useAuth()

  return (
    <div>
      <h1>Only logged-in users can view the account page</h1>
      <p className="font-mono pt-12">{user?.email}</p>
    </div>
  )
}
