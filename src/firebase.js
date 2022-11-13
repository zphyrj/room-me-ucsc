
import { initializeApp } from "firebase/app"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8qn1qAFd-oCQPydcuZsnkZsFEgHSnY-8",
  authDomain: "room-me-ucsc.firebaseapp.com",
  projectId: "room-me-ucsc",
  storageBucket: "room-me-ucsc.appspot.com",
  messagingSenderId: "470168848519",
  appId: "1:470168848519:web:84845665e5287d41241022",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)