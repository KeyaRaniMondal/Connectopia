// import { Input } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
// import { Link, useNavigate } from "react-router";
// // import useAuth from "../../hooks/useAuth";

// const Register = () => {
//     // const navigate=useNavigate()
    
//     // const { createUser } = useAuth()
//     // const { control, handleSubmit } = useForm({
//     //     defaultValues: {
//     //         userName: '',
//     //         email: '',
//     //         password: ''
//     //     }
//     // });
//     const onSubmit = async (data) => {
//         try {
//             const result = await createUser(data.userName, data.email, data.password);
//             console.log(result)
//             const firebaseUser = result.user

//             const newUser = {
//                 userName:data.userName,
//                 email:data.email,
//                 firebaseUID: firebaseUser.uid
//             }

//             const response = await fetch('http://localhost:5000/users', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(newUser)
//             })
//             const mongoResult = await response.json()


//             if (response.ok) {
//                 alert("User registered successfully!");
//                 navigate("/featuredPosts");
//             } else {
//                 alert("Failed to save user to database.");
//             }
//         } catch (error) {
//             console.error(error);
//             alert(error.message);
//         }
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen ">
//             <div className="hero-content flex-col min-w-screen">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold mb-10">Register now!</h1>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <div className="card-body">

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <fieldset className="fieldset">
//                                 <label className="fieldset-label">UserName</label>
//                                 <Controller
//                                     name="userName"
//                                     control={control}
//                                     render={({ field }) => <Input {...field} type="text" placeholder="Enter your user name" />}
//                                 />

//                                 <label className="fieldset-label">Email</label>
//                                 <Controller
//                                     name="email"
//                                     control={control}
//                                     render={({ field }) => <Input {...field} type="email" placeholder="Enter your email address" />}
//                                 />

//                                 <label className="fieldset-label">Password</label>
//                                 <Controller
//                                     name="password"
//                                     control={control}
//                                     render={({ field }) => <Input {...field} type="password" placeholder="Enter your Password" />}
//                                 />

//                                 <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
//                             </fieldset>
//                         </form>
//                         <div className="text-center">
//                             Already have an account? <Link to='/login' className="text-[#FF9D23] font-bold">Sign In</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Register

import { useState } from "react";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { useAuthStore } from "../../Store/useAuthStore";
import AuthImagePattern from "../../Components/skeletons/AuthImagePattern";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp, loginWithGoogle, isGoogleAuthLoading } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) await signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="divider">or</div>
          <button
            onClick={loginWithGoogle}
            disabled={isGoogleAuthLoading}
            className="btn btn-outline w-full"
          >
            {isGoogleAuthLoading ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Continue with Google
              </>
            ) : (
              "Continue with Google"
            )}
          </button>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};
export default SignUpPage;