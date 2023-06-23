import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAWmiFPSY8C2KA3Oj_nICyOLCJY5cN5InA",
    authDomain: "o-l-x-23999.firebaseapp.com",
    projectId: "o-l-x-23999",
    storageBucket: "o-l-x-23999.appspot.com",
    messagingSenderId: "572766032098",
    appId: "1:572766032098:web:8786d81ce0748e394c8ebb",
    measurementId: "G-RPXGRPW8VV"
  };

  export default firebase.initializeApp(firebaseConfig)