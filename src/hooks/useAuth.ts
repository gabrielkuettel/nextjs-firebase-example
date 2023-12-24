import { useState, useEffect, useMemo } from 'react'
import type { User } from 'firebase/auth'
import { auth } from '@/firebase/config'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isRestricted = useMemo(() => !isLoading && !user, [isLoading, user])

  function handleAuthStateChange(user: User | null) {
    if (user) {
      setUser(user)
      setIsLoading(false)
    } else {
      setUser(null)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    auth.onAuthStateChanged(handleAuthStateChange)
  }, [user])

  return { user, isLoading, isRestricted }
}
