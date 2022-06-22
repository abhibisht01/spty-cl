import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC827unf2Z2YxUCijcCSmgIN4Vp0payzR8",
    authDomain: "spty-cl.firebaseapp.com",
    projectId: "spty-cl",
    storageBucket: "spty-cl.appspot.com",
    messagingSenderId: "845739232949",
    appId: "1:845739232949:web:9fc8b031015a9330ea78fc",
    measurementId: "G-8MZ27G3K78"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const storage = firebase.storage(); //for storage in the databse.
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication

export { auth, provider };
export default db;