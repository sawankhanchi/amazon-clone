import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVia1cEBfKwdS9IRv1nNmwGgnwxgrrIew",
    authDomain: "clone-3654d.firebaseapp.com",
    projectId: "clone-3654d",
    storageBucket: "clone-3654d.appspot.com",
    messagingSenderId: "92363490820",
    appId: "1:92363490820:web:6c1349042ce31104e99751",
    measurementId: "G-EDRLG4BYK1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
