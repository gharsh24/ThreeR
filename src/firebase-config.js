import { initializeApp } from "firebase/app";
import {
        getFirestore,
        collection,
        getDocs,getDoc,
        addDoc, deleteDoc, updateDoc,
        doc,
        onSnapshot,
        where,
        query,
        orderBy,serverTimestamp
} from "firebase/firestore";
import {
    getAuth,GoogleAuthProvider,
    onAuthStateChanged
} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB7TC_olNeoSBLwWIC45BZhLG09sdQrsJg",
    authDomain: "fir-project-43abe.firebaseapp.com",
    projectId: "fir-project-43abe",
    storageBucket: "fir-project-43abe.appspot.com",
    messagingSenderId: "865166771133",
    appId: "1:865166771133:web:5367340e19ad3c7c1dc8d4"
  };

const app=initializeApp(firebaseConfig);

export const db=getFirestore();
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()
