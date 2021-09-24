import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.VUE_APP_FIRESTORE_KEY}`,
  authDomain: "yutify-music.firebaseapp.com",
  projectId: "yutify-music",
  storageBucket: "yutify-music.appspot.com",
  messagingSenderId: "167504977184",
  appId: "1:167504977184:web:bce72525e560f3cd274b45",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp, storage };
