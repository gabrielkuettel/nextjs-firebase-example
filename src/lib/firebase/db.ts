import { firestore } from '@/lib/firebase/config'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export async function addData(collection: string, id: string, data: any) {
  let result = null
  let error = null

  try {
    const docRef = doc(firestore, collection, id)

    result = await setDoc(docRef, data, {
      merge: true, // Merge the new data with existing document data
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}

export async function getDocument(collection: string, id: string) {
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
