import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrsPLnaNSZ5GA0WcixUdV83K5dqWrFS_I",
    authDomain: "kutai-60647.firebaseapp.com",
    projectId: "kutai-60647",
    storageBucket: "kutai-60647.appspot.com",
    messagingSenderId: "417472057925",
    appId: "1:417472057925:web:e693e4501952ed86be492c"
  };
  
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
  app,
  google  
}  