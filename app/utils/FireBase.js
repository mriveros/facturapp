import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/*const firebaseConfig = {
    apiKey: "AIzaSyDcytrPy5n59ivxoMFvXlxaQAwzJNzgUUM",
    authDomain: "tenedores-v2-e1b18.firebaseapp.com",
    projectId: "tenedores-v2-e1b18",
    storageBucket: "tenedores-v2-e1b18.appspot.com",
    messagingSenderId: "218041466382",
    appId: "1:218041466382:web:1e7565218f364af352865f",
};*/

const firebaseConfig = {
    apiKey: "AIzaSyBehBQwIRoNHPVwrA-lzNIgO7ruCIsTa0M",
    authDomain: "tenedores-71f81.firebaseapp.com",
    databaseURL: "https://tenedores-71f81.firebaseio.com",
    projectId: "tenedores-71f81",
    storageBucket: "tenedores-71f81.appspot.com",
    messagingSenderId: "867281312386",
    appId: "1:867281312386:web:43aacbcded2a7aba80729b"
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);