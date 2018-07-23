import firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  BUCKET,
  DATABASE,
  SENDER_ID
} from 'react-native-dotenv'

export const initFirebase = () => {
  return firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE,
    projectId: 'russian-flashcard-app',
    storageBucket: BUCKET,
    messagingSenderId: SENDER_ID
  })
}
