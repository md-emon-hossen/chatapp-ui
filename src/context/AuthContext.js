import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../firebase';

// create context
const AuthContext = React.createContext();

//useContext hooks wrp the whole context
export function UseAuth() {
    return useContext(AuthContext);
}

// Auth probider function
export function AuthProbider({ children }) {
    const [loading, setloading] = useState(true);
    const [cUser, setcUser] = useState();


    useEffect(() => {
        const auth = getAuth();
        const unscribe = onAuthStateChanged(auth, (user) => {
            setloading(false);
            setcUser(user);
        })

        return unscribe;
    });

    //signup function
    async function signup(email, password, username) {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        //current user update
        const user = auth.currentUser;
        setcUser({
            ...user
        });

    }



    //login function
    async function login(email, password) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
    }

    //logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }


    // pass all context value from here
    const value = {
        cUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}