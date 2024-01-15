import React, { createContext, useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
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

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth,currentUser =>{
            setuser(currentUser)
        })
        return ()=> unSubscriber();
    }, [])

    const authInfo = {
        createUser,
        user,
        signin
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};
export default AuthProvider;