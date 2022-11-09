import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const ContextProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider =new GoogleAuthProvider()
    // sign up with email and password created
    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in 
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google sign in
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // update profile
    const updateUserProfile = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : photo
        })
    }
    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth).then(()=>{

        }).catch(err => console.log(err))
    }
    
    const authInfo = {
        user,
        signUp,
        login,
        updateUserProfile,
        logOut,
        googleLogin,
        loading
    };
    // onAuth state observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])
    return (
        <div>
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
        </div>
  );
};

export default AuthContext;
