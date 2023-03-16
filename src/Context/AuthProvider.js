import React, { createContext, useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.confige';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) 
    const [handleRefetch, setHandleRefetch] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateNamePhoto =(displayName, photoURL)=> {
        setLoading(true)
        return updateProfile( auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        localStorage.removeItem('genious-token')
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            console.log(createUser)
            setUser(createUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])  

    const authInfo ={
        createUser,
        logIn,
        logOut,
        googleLogin,
        updateNamePhoto,
        handleRefetch,
        setHandleRefetch,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;