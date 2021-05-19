import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC09PvLfi5_qp2FnHJYWnc_qI5W8FGfqto',
  authDomain: 'deel-clothing.firebaseapp.com',
  projectId: 'deel-clothing',
  storageBucket: 'deel-clothing.appspot.com',
  messagingSenderId: '814026238795',
  appId: '1:814026238795:web:6b6bdbd3ca21a590f156ce',
  measurementId: 'G-EJBSRB9Z95',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.log('Error creating User:', e.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
