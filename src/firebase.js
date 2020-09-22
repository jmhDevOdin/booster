// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdUFjtJWwHidGcW70Uy9hmDuqNm2fnEcs",
    authDomain: "slack-clone-2c1f6.firebaseapp.com",
    databaseURL: "https://slack-clone-2c1f6.firebaseio.com",
    projectId: "slack-clone-2c1f6",
    storageBucket: "slack-clone-2c1f6.appspot.com",
    messagingSenderId: "917733742934",
    appId: "1:917733742934:web:822d032893ef5ed8cd9ef7",
    measurementId: "G-TWQP1ZY2D9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;