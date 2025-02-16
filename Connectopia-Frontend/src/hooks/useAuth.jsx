import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
// import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
