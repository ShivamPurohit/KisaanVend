import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBXRWQWENZvYTVnM5BUg7Lzod65sc-uHAs",
    authDomain: "kisaanvend.firebaseapp.com",
    projectId: "kisaanvend",
    storageBucket: "kisaanvend.appspot.com",
    messagingSenderId: "322781081770",
    appId: "1:322781081770:web:a439610a543ed4660620d3",
    measurementId: "G-LSK5YL52PT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };