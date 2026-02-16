// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGqaa_iQCcd-LE6TooRmR90eIgD91yv0g",
  authDomain: "modern-blog-firestore.firebaseapp.com",
  projectId: "modern-blog-firestore",
  storageBucket: "modern-blog-firestore.firebasestorage.app",
  messagingSenderId: "895607747581",
  appId: "1:895607747581:web:f93371b387b29b96475f94",
  measurementId: "G-JGDKGKNVPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
