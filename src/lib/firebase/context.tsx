'use client'
import { createContext, useEffect, useState, useMemo, useContext, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { auth } from '@/lib/firebase/config'

export const AuthContext = createContext<{
  user: User | null
  isLoading: boolean
  isRestricted: boolean
}>({
  user: null,
  isLoading: true,
  isRestricted: true,
})

interface AuthContextProviderProps {
  children: ReactNode
}

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: AuthContextProviderProps): JSX.Element {
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

  return (
    <AuthContext.Provider value={{ user, isLoading, isRestricted }}>
      {children}
    </AuthContext.Provider>
  )
}
