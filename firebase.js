import { initializeApp } from 'firebase/app'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyD6wp13rqIHcESrkpdhgUj0hpOZ6kKNPRk",
 authDomain: "safar-cab-book.firebaseapp.com",
 projectId: "safar-cab-book",
 storageBucket: "safar-cab-book.appspot.com",
 messagingSenderId: "912247342531",
 appId: "1:912247342531:web:d8cc59bca36beeae8d6976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export{ app, provider, auth }