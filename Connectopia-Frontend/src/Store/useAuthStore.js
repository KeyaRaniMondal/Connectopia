import { create } from "zustand";
import { axiosInastance } from "../lib/axios";

export const useAuthStore=create((set)=>({
    authUser:null,
    isSignUp:false,
    isLogging:false,
    isCheckingAuth:true,

    checkAuth:async()=>{
        try{
            const res=await axiosInastance.get("/auth/check")
            set({authUser:res.data})
        }
        catch(error){
            console.log("error in checkauth",error)
            set({authUser:null})
        }
        finally{
            set({isCheckingAuth:false})
        }
    }
}))