import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM6BKbgu3UFSrqoPXVA5Wq8uUe7EGxcaM",
  authDomain: "bernerwoodcraft-70ac7.firebaseapp.com",
  projectId: "bernerwoodcraft-70ac7",
  storageBucket: "bernerwoodcraft-70ac7.appspot.com",
  messagingSenderId: "728318821147",
  appId: "1:728318821147:web:e00114de9896ceb31a09be",
  measurementId: "G-F2NVD5HTD5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
