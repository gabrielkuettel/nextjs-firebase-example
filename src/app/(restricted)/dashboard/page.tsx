'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function DashboardPage(): JSX.Element {
  const { user } = useAuth()

  return (
    <div>
      <h1>Only logged-in users can view this page</h1>
      <p>
        Go to{' '}
        <Link className="underline" href="/dashboard/route-one">
          Route One
        </Link>{' '}
        or{' '}
        <Link className="underline" href="/dashboard/route-two">
          Route Two
        </Link>
      </p>
      <p className="font-mono pt-12">{user?.email}</p>
    </div>
  )
}
