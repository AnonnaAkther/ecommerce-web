import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBQoPpVcYwmr6jMZnyxDfY9PMhhUkji7IQ",
  authDomain: "glamour-girls.firebaseapp.com",
  projectId: "glamour-girls",
  storageBucket: "glamour-girls.appspot.com",
  messagingSenderId: "315410407059",
  appId: "1:315410407059:web:4afde14bd79e143d24b766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;