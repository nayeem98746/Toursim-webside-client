import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Component/Firebase/firebase.init";

initializeAuthentication()
 
const useFirebase = () => {
    const [users, setusers] = useState({})
    const auth = getAuth()
    const singInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setusers(result.user)
        })
    }


    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setusers(user)
            }
            else{
               setusers({}) 
            }
        })
        return () => unsubscribed
    } ,[])


    const logOut = () => {
        signOut(auth)
        .then(() => {})
    }

    return{
        users,
        singInUsingGoogle,
        logOut

    }
}

export default useFirebase