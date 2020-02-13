import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2cuy1UOYxaVQHF3-22q-fxyKoBWdDv2Q",
  authDomain: "ecommerce-db-ae441.firebaseapp.com",
  databaseURL: "https://ecommerce-db-ae441.firebaseio.com",
  projectId: "ecommerce-db-ae441",
  storageBucket: "ecommerce-db-ae441.appspot.com",
  messagingSenderId: "132835189377",
  appId: "1:132835189377:web:aaaf045e46565dce0d2380",
  measurementId: "G-E8627QXRMJ"
};

// export const createUserProfileDocument = async ( userAuth, additonalData ) => {
//   if(!userAuth) return; 

//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapShot = await userRef.get();

//   console.log(snapShot);

//   if(!snapShot.exsists) {
//     const {displayName, email} = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additonalData
//       })
//     } catch (error) {
//       console.log("error D:",error.message);
//     }
//   }
//   return userRef;

// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;