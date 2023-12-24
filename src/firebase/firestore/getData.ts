import { firestore } from '../config'
import { doc, getDoc } from 'firebase/firestore'

export default async function getDocument(collection: string, id: string) {
  let result = null
  let error = null

  try {
    const docRef = doc(firestore, collection, id)

    result = await getDoc(docRef)
  } catch (e) {
    error = e
  }

  return { result, error }
}
