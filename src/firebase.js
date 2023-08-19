import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ZDCM2CQm-sXZxJQdH9ynsfpgEVVp46A",
  authDomain: "quora-clone-c713d.firebaseapp.com",
  projectId: "quora-clone-c713d",
  storageBucket: "quora-clone-c713d.appspot.com",
  messagingSenderId: "122219076232",
  appId: "1:122219076232:web:a4f090f9f57a073595dd3d",
  measurementId: "G-RN9N0MRPY1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
