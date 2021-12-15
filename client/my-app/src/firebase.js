// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmu7V06vjeCWTGerYYTTrHOfxcwlsWSUw",
  authDomain: "property-analyser-efdbb.firebaseapp.com",
  projectId: "property-analyser-efdbb",
  storageBucket: "property-analyser-efdbb.appspot.com",
  messagingSenderId: "231231177315",
  appId: "1:231231177315:web:f69fe9ba35b644313b6e56",
  measurementId: "G-5M4H4YMH67",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// recaptcha
// const {
//   initializeAppCheck,
//   ReCaptchaV3Provider,
// } = require("firebase/app-check");

// // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// // key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider("6LdZL5wdAAAAAOMestBr427zFg947-vEBEqa_Ncc"),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true,
// });

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
