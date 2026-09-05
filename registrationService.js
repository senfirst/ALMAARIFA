// Service d'envoi des demandes d'inscription.
//
// Pour l'instant, cette fonction simule un envoi réussi (aucun backend requis).
// Pour connecter un vrai backend plus tard, remplacez le corps de la fonction
// par un appel à Firebase (Firestore) ou à Supabase, par exemple :
//
// --- Exemple avec Supabase ---
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
// export async function submitRegistration(data) {
//   const { error } = await supabase.from('inscriptions').insert([data])
//   if (error) throw error
//   return { success: true }
// }
//
// --- Exemple avec Firebase (Firestore) ---
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import { app } from './firebaseConfig'
// const db = getFirestore(app)
// export async function submitRegistration(data) {
//   await addDoc(collection(db, 'inscriptions'), { ...data, createdAt: new Date().toISOString() })
//   return { success: true }
// }

export async function submitRegistration(data) {
  // Simulation d'une latence réseau.
  await new Promise((resolve) => setTimeout(resolve, 700))

  // TODO: remplacer par un vrai appel API/backend (Firebase ou Supabase).
  console.info('Nouvelle demande d\'inscription (simulation) :', data)

  return { success: true }
}
