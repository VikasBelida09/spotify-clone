import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8yIJZIe2xT2Rqbsk23dqaPmXyVSli0t4",
  authDomain: "clone-3f4a5.firebaseapp.com",
  databaseURL: "https://clone-3f4a5.firebaseio.com",
  projectId: "clone-3f4a5",
  storageBucket: "clone-3f4a5.appspot.com",
  messagingSenderId: "136110154456",
  appId: "1:136110154456:web:917795bd8d6c806205edad",
  measurementId: "G-K27Q94GLPT",
});
const auth = firebaseApp.auth()
export { auth };
