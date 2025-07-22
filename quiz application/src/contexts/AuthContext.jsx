import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../../config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [])


    //signup function
    async function signup(email, password, username) {
        await createUserWithEmailAndPassword(auth, email, password);
        
        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    // login function
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function
    function logout() {
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}