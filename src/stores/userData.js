import { readable } from "svelte/store";
import {getDoc, getFirestore, doc, onSnapshot, collection} from 'firebase/firestore'
import {onAuthStateChanged, getAuth} from "firebase/auth";
import { goto } from "$app/navigation";
import { app } from "../firebase" // import firebase app
const auth = getAuth(app);
const userColl = collection(getFirestore(app), 'users')
export const userData = readable(undefined, (set) => {
  let unsubscribe2 = ()=>{};
  const unsubscribe = onAuthStateChanged(auth, async (user) =>{
    if (user) {
      const userDoc = doc(userColl, user.uid)
      unsubscribe2 = onSnapshot(userDoc, (doc) => {
        if (doc.exists()) {
          set({
            ...doc.data(),
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        } else {
          set({...user, signedUp: false});
          goto("/signup");
        }
      });
      getDoc(userDoc)
        .then((doc) => {
          console.log(user)
          if (doc.exists()) {
            set({
              ...doc.data(),
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          } else {
            set({...user, signedUp: false});
            goto("/signup");
          }
        })
    } else {
      set(null);
    }
  });
  return ()=> {
    unsubscribe()
    unsubscribe2()
  };
})