// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;





// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBbLO_bRAD3L75XdKwtfMSwQgfg-Mgdaw4",
//   authDomain: "car-service-tools.firebaseapp.com",
//   projectId: "car-service-tools",
//   storageBucket: "car-service-tools.appspot.com",
//   messagingSenderId: "64547658391",
//   appId: "1:64547658391:web:5fdf5feff0ddaa026fa7d2"
// };

