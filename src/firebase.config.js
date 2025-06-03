import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaMu07Kwfph73DAr_2FJsBTiNgzRXL1os",
  authDomain: "my-react-app-72284.firebaseapp.com",
  projectId: "my-react-app-72284",
  storageBucket: "my-react-app-72284.appspot.com",
  messagingSenderId: "828455686061",
  appId: "1:828455686061:web:9a0238e55ed7c162d25b24"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);