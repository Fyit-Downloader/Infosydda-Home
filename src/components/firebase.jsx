import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHofQgacM0ZtsVR07_pH9kU8ae_9dgaE4",
    authDomain: "infosyddats.firebaseapp.com",
    projectId: "infosyddats",
    storageBucket: "infosyddats.appspot.com",
    messagingSenderId: "178271192163",
    appId: "1:178271192163:web:cdd7760dcfda4b496fe456",
    measurementId: "G-V5B1MKZ8HT"
});

var db = firebaseApp.firestore();

export { db };