import React, { createContext, useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth)
    }
const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, {
        displayName: userInfo
    })
}
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser =>{
            setuser(currentUser)
        })
        return ()=> unSubscriber();
    }, [])

    const authInfo = {
        createUser,
        user,
        signin,
        logOut,
        updateUser
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};
export default AuthProvider;