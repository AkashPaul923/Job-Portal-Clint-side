import { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext('')
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)


    const handleRegister = ( email, password ) => {
        return createUserWithEmailAndPassword( auth , email, password)
    }

    const handleSignIn = ( email, password ) =>{
        return signInWithEmailAndPassword( auth, email, password)
    }

    const handleSignOut = () =>{
        return signOut( auth )
    }

    const manageProfile = ( name, photo ) =>{
        return  updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            console.log(currentUser);
            if( currentUser ){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoader(false)
        })
        
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        handleRegister,
        handleSignOut,
        manageProfile,
        handleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;