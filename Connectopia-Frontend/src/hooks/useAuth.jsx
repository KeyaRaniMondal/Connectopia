import { useContext } from "react";
<<<<<<< HEAD
import { AuthContext } from "../providers/Authprovider";
// import { AuthContext } from "../Provider/AuthProvider";
=======
import { AuthContext } from "../Provider/AuthProvider";


>>>>>>> c4b524f20ec7af53fa620f449cda78804d2405f3

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

<<<<<<< HEAD
export default useAuth;
=======
export default useAuth;
>>>>>>> c4b524f20ec7af53fa620f449cda78804d2405f3
