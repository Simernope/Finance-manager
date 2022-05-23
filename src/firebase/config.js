import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCxBftyi4scqbJwECiX9_5S1xYtbrOkpaI",
    authDomain: "urfu-project.firebaseapp.com",
    projectId: "urfu-project",
    storageBucket: "urfu-project.appspot.com",
    messagingSenderId: "720792495790",
    appId: "1:720792495790:web:d4e8fb6523ac8d5f146f3f"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}
