import * as firebase from 'firebase/app';
import "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const auth = firebase.initializeApp({
    apiKey: "AIzaSyDuhOxB-ma81YCg5wCKKLiYZ-j6tRcmiHw",
    authDomain: "socialmedia-8386a.firebaseapp.com",
    projectId: "socialmedia-8386a",
    storageBucket: "socialmedia-8386a.appspot.com",
    messagingSenderId: "17026714347",
    appId: "1:17026714347:web:dbf8245e84be80d93cccae"
  }).auth();
  const provider = new GoogleAuthProvider();

export { auth, provider };