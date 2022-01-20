import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqPy0p1Gv_INxXz1t6QNMhz4acDdH6dXo",
    authDomain: "coderhouse-proyecto.firebaseapp.com",
    projectId: "coderhouse-proyecto",
    storageBucket: "coderhouse-proyecto.appspot.com",
    messagingSenderId: "991465169208",
    appId: "1:991465169208:web:c3c9a1c61a9b081145a1cd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);