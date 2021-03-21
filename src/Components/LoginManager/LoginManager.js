import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      const signedInUser = {
        isSignedIn: true,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      };
      return signedInUser;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential)
    });
};

export const crateWithEmailPassword = (email, password) => {
  
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    return user
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return({errorCode, errorMessage})
  });
}

export const loginWithMailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    const signedInUser = {
      isSignedIn: true,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    };
    return signedInUser;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage, errorCode)
    return ({errorCode, errorMessage})
  });
}
