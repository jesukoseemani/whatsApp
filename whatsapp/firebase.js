import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmH8Jdibw5Q4XBTCXPTsCL0I2MuFNmw7o",
  authDomain: "whatsapp-ee585.firebaseapp.com",
  projectId: "whatsapp-ee585",
  storageBucket: "whatsapp-ee585.appspot.com",
  messagingSenderId: "450155513657",
  appId: "1:450155513657:web:21de8c16f3b111b78a4ae8"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db , auth, provider};