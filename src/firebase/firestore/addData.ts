import { firestore } from '../config'
import { doc, setDoc } from 'firebase/firestore'

export default async function addData(collection: string, id: string, data: any) {
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
