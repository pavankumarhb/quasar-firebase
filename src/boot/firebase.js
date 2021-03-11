import firebase from 'firebase/app';
import 'firebase/auth';

  let firebaseConfig = {
    apiKey: "AIzaSyBH9xrFcjgsxE4mhdHUhJxeOzkaqz6DvqQ",
    authDomain: "logform-b38bf.firebaseapp.com",
    projectId: "logform-b38bf",
    storageBucket: "logform-b38bf.appspot.com",
    messagingSenderId: "330974685826",
    appId: "1:330974685826:web:ad87683883d441bacee29b",
    measurementId: "G-RTHHSDRPLZ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode='en';
  const firebaseAuth = firebase.auth();
  export { firebaseAuth }


