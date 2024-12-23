import { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext('')

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)


    const handleRegister = ( email, password ) => {
        setLoader(true)
        return createUserWithEmailAndPassword( auth , email, password)
    }

    const handleSignIn = ( email, password ) =>{
        setLoader(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    const handleSignOut = () =>{
        setLoader(true)
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
            if(currentUser?.email){
                const user = { email: currentUser.email}
                axios.post('http://localhost:5000/jwt', user , {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    setLoader(false)
                })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    setLoader(false)
                })
            }
            // setLoader(false)
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