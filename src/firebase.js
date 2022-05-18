import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFCfELQqxWvoMZQEDUlGVu0EaqqUOaqIw",
  authDomain: "clone-0903.firebaseapp.com",
  projectId: "clone-0903",
  databaseURL: "https://clone-0903.firebaseio.com",
  storageBucket: "clone-0903.appspot.com",
  messagingSenderId: "71999230568",
  appId: "1:71999230568:web:332084626d19bbe03621dd",
  measurementId: "G-T29MG3LC1E",
});
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
