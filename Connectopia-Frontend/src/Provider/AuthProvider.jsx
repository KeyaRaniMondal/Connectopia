

import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser=async(userName,email,password)=>{
        const result=await createUserWithEmailAndPassword(auth,email,password)
        setUser(result.user)
        return result
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user); 
                setLoading(false);
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
                setLoading(false);
            });
    };

    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        setUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
