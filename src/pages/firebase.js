import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA9LQinui3eJFAK8oPx4fLbtaVn7WOYBfs",
    authDomain: "affle-3747d.firebaseapp.com",
    projectId: "affle-3747d",
    storageBucket: "affle-3747d.appspot.com",
    messagingSenderId: "611320614725",
    appId: "1:611320614725:web:92ec31814206c88a71b82c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //exports
  export const auth =firebase.auth();
  export const  googleAuthProvider = new firebase.auth.GoogleAuthProvider();