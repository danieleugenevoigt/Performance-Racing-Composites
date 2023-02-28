import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCx24x7iODsgMXbEfERe3_GechNbZJslus",
  authDomain: "performance-racing-composites.firebaseapp.com",
  databaseURL: "https://performance-racing-composites-default-rtdb.firebaseio.com",
  projectId: "performance-racing-composites",
  storageBucket: "performance-racing-composites.appspot.com",
  messagingSenderId: "287270707248",
  appId: "1:287270707248:web:acaf814735fe5e6f6f0df5"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

