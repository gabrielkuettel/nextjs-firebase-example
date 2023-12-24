import { auth } from '../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

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
