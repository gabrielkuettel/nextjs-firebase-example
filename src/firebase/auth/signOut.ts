import { auth } from '../config'
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
