//! firebase version8寫法
// import firebase from "firebase/app";
// import "firebas/firestore";
//! firebase version9
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_FIRESTORE_KEY}`,
  authDomain: "project-planner-ee8ae.firebaseapp.com",
  databaseURL: "https://project-planner-ee8ae-default-rtdb.firebaseio.com",
  projectId: "project-planner-ee8ae",
  storageBucket: "project-planner-ee8ae.appspot.com",
  messagingSenderId: "1080047426703",
  appId: "1:1080047426703:web:b92cfc5a9d77ffb02ce4fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebase.firestore();

export default db;
