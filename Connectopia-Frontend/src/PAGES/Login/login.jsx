import { Input } from "@mui/material";
import { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
   const{ loginUser}=useContext(AuthContext)
   const [user, setUser] = useState(null);
   const navigate=useNavigate()


   const { control, handleSubmit } = useForm({
      defaultValues: {
         email: '',
         password: ''
      }
   });
   const onSubmit = async(data) => {
      console.log(data)
      try {
       
         const result = await loginUser(data.email, data.password);
         alert("Login successful!");
         setUser(result);
         navigate("/");
       } catch (error) {
         alert(error.message);
         // setError({ ...error, email: "Invalid email or password." });
       } 
   };

   return (
      <div className="hero bg-base-200 min-h-screen ">
         <div className="hero-content flex-col min-w-screen">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold mb-10">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <div className="card-body">

                  <form onSubmit={handleSubmit(onSubmit)}>
                     <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <Controller
                           name="email"
                           control={control}
                           render={({ field }) => <Input {...field} type="email" placeholder="Enter your email address" />}
                        />

                        <label className="fieldset-label">Password</label>
                        <Controller
                           name="password"
                           control={control}
                           render={({ field }) => <Input {...field} type="password" placeholder="Enter your Password" />}
                        />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                     </fieldset>
                  </form>
                  <div className="text-center">
                     Don't have an account? <Link to='/register' className="text-[#FF9D23] font-bold">Sign Up</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

};
export default Login