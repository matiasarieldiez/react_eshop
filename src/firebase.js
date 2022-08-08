import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMztkmm5_Q2u-TuHn4YYeKrTEYsUpPQ-A",
    authDomain: "react-ecommerce-mad.firebaseapp.com",
    projectId: "react-ecommerce-mad",
    storageBucket: "react-ecommerce-mad.appspot.com",
    messagingSenderId: "480619988461",
    appId: "1:480619988461:web:82c96eaa7ca107e2a293e4",
};

firebase.initializeApp(firebaseConfig);

// Initialise our Firebase
const firestore = firebase.firestore();
export default firestore;
