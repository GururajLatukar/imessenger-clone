import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg6COndjuMlNjSshQpzOGL30rhKXIEERk",
  authDomain: "imessage-clone-6a3f7.firebaseapp.com",
  databaseURL: "https://imessage-clone-6a3f7.firebaseio.com",
  projectId: "imessage-clone-6a3f7",
  storageBucket: "imessage-clone-6a3f7.appspot.com",
  messagingSenderId: "705373045210",
  appId: "1:705373045210:web:9a49cb6855c02a90f440e3",
  measurementId: "G-V90Z53SK6J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
