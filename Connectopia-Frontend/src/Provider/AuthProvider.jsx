// import { Children, createContext, useState } from "react"
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { app } from "../firebase/firebase.config";

// export const AuthContext=createContext(null)
// const auth=getAuth(app)

// const AuthProvider=({Children})=>{
//     const [user,setUser]=useState(null)
//     const [loading,setLoading]=useState(true)
//     const googleProvider=new GoogleAuthProvider()

//     const googleSignIn=()=>{
//         setLoading(true)
//         return signInWithPopup(auth,googleProvider)
//     }
//     const authInfo={
//         user,
//         loading,
//         googleSignIn,
//     }
//     return(
//         <AuthContext.Provider value={authInfo}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }
// export default AuthProvider

import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => { // ✅ Fix: Changed "Children" to "children"
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user); // ✅ Save user state
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
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/* ✅ Fix: Used "children" */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
