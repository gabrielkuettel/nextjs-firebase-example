'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

export function Restricted({ children }: { children: ReactNode }): ReactNode {
  const { isRestricted } = useAuth()
  const router = useRouter()

  if (isRestricted) {
    router.push('/')
  }

  return <div>{children}</div>
}
