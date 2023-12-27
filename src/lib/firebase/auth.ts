import { auth } from '@/lib/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'

export async function register(email: string, password: string) {
  let result = null
  let error = null

  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}

export async function signIn(email: string, password: string) {
  let result = null
  let error = null

  try {
    result = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    error = e
  }

  return { result, error }
}

import { signOut as _signOut } from 'firebase/auth'

export async function signOut() {
  let result = null
  let error = null

  try {
    await _signOut(auth)
    result = true
  } catch (e) {
    error = e
  }

  return { result, error }
}
