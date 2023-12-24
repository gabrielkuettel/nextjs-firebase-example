'use client'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { ReactNode } from 'react'

export function RestrictedLayout({ children }: { children: ReactNode }): ReactNode {
  const { isLoading, isRestricted } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isRestricted) {
    return (
      <div>
        <h1>Access Forbidden</h1>
        <Link className="underline" href="/signin">
          Sign In
        </Link>{' '}
        or{' '}
        <Link className="underline" href="/signup">
          Sign Up
        </Link>
      </div>
    )
  }

  return <div>{children}</div>
}
