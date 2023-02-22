import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4AthTdDQFx8QcbHyD4V_mDkVvSfDC6kQ",
  authDomain: "quora-clone-9ab4c.firebaseapp.com",
  projectId: "quora-clone-9ab4c",
  storageBucket: "quora-clone-9ab4c.appspot.com",
  messagingSenderId: "617455548741",
  appId: "1:617455548741:web:7dcdf571b0e11c12f2a62c",
  measurementId: "G-JS7N2P77WS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
