import { create } from "zustand";
import { axiosInastance } from "../lib/axios.js";
import toast from "react-hot-toast";

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
    },
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
          const res = await axiosInastance.post("/auth/signup", data);
          set({ authUser: res.data });
          toast.success("Account created successfully");
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isSigningUp: false });
        }
      },
}))