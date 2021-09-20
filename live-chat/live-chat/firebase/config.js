import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_FIRESTORE_KEY}`,
  authDomain: "project-planner-ee8ae.firebaseapp.com",
  databaseURL: "https://project-planner-ee8ae-default-rtdb.firebaseio.com",
  projectId: "project-planner-ee8ae",
  storageBucket: "project-planner-ee8ae.appspot.com",
  messagingSenderId: "1080047426703",
  appId: "1:1080047426703:web:c18f60ed4519f5642ce4fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
