// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from  "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDLYU7Bm0OsJDW9z_cg28aPdZUIm6cevbU",
    authDomain: "amozon-challenge-9ef39.firebaseapp.com",
    projectId: "amozon-challenge-9ef39",
    storageBucket: "amozon-challenge-9ef39.appspot.com",
    messagingSenderId: "950908726944",
    appId: "1:950908726944:web:a36c7852f5d9a6c12123c5",
    measurementId: "G-9YE5X9ZTT4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
 