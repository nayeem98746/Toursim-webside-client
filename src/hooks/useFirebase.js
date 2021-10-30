import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Component/LogIn/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const [error, setError] = useState("")


    const singInUseingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            setError("")
        })
        .finally(()=> setIsLoading(false))
    }

    useEffect( () => {
     const unsubscribed =   onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    } ,[])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=> { })
        .finally(()=> setIsLoading(false))
    }


    return{
         user,
         isLoading,
        singInUseingGoogle,
        error,
        logOut
    }
}

export default useFirebase;