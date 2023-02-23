import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig =  ({
     apiKey: "AIzaSyAyRZj1UwQJ0sSAwffuygq1aOe-FWeDqRM",
  authDomain: "fir-3d44d.firebaseapp.com",
  projectId: "fir-3d44d",
  storageBucket: "fir-3d44d.appspot.com",
  messagingSenderId: "1047017366693",
  appId: "1:1047017366693:web:58005c0b831883d37dd94c",
  measurementId: "G-5PEMT0N87H"

});

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };