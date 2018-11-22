import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyANTG-cBqGylmlxkgNhoCkV4avFhsjjHaU",
  authDomain: "edfirebase-78044.firebaseapp.com",
  databaseURL: "https://edfirebase-78044.firebaseio.com",
  projectId: "edfirebase-78044",
  storageBucket: "edfirebase-78044.appspot.com",
  messagingSenderId: "841924772867"
}

const init = () => firebase.initializeApp(config);

init()

