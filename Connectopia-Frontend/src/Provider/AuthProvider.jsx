import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // to save informations in databse
    const saveUserToDb = async (user) => {
        const { email, displayName, photoURL } = user
        await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, displayName, photoURL })
        })
    }


    // for register using email-pass
    const createUser = async (userName, email, password) => {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(result.user, { displayName: userName, photoURL: '' })
        setUser(result.user)
        await saveUserToDb(result.user)
        return result
    }

    // for login using email-pass
    const loginUser = async (email, password) => {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        setUser(result.user);
        setLoading(false);
        return result;
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Without this user won't be capture after refresh & again will ask to login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // for google signin
    const googleSignIn = async () => {
        setLoading(true);
        const result = signInWithPopup(auth, googleProvider)
        setUser(result.user);
        await saveUserToDb(result.user)
        setLoading(false);
    };

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        loginUser,
        updateUserProfile,
        setUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
