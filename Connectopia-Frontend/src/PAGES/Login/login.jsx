// import { Input } from "@mui/material";
// import { useContext, useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { Link, useNavigate } from "react-router";
// // import { AuthContext } from "../../Provider/AuthProvider";

// const Login = () => {
//    // const{ loginUser}=useContext(AuthContext)
//    // const [user, setUser] = useState(null);
//    // const navigate=useNavigate()


//    // const { control, handleSubmit } = useForm({
//    //    defaultValues: {
//    //       email: '',
//    //       password: ''
//    //    }
//    // });
//    // const onSubmit = async(data) => {
//    //    console.log(data)
//    //    try {
       
//    //       const result = await loginUser(data.email, data.password);
//    //       alert("Login successful!");
//    //       setUser(result);
//    //       navigate("/featuredPost");
//    //     } catch (error) {
//    //       alert(error.message);
//    //       // setError({ ...error, email: "Invalid email or password." });
//    //     } 
//    // };

//    return (
//       <div className="hero bg-base-200 min-h-screen ">
//          <div className="hero-content flex-col min-w-screen">
//             <div className="text-center lg:text-left">
//                <h1 className="text-5xl font-bold mb-10">Login now!</h1>
//             </div>
//             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                <div className="card-body">

//                   <form onSubmit={handleSubmit(onSubmit)}>
//                      <fieldset className="fieldset">
//                         <label className="fieldset-label">Email</label>
//                         <Controller
//                            name="email"
//                            control={control}
//                            render={({ field }) => <Input {...field} type="email" placeholder="Enter your email address" />}
//                         />

//                         <label className="fieldset-label">Password</label>
//                         <Controller
//                            name="password"
//                            control={control}
//                            render={({ field }) => <Input {...field} type="password" placeholder="Enter your Password" />}
//                         />

//                         <div><a className="link link-hover">Forgot password?</a></div>
//                         <button type="submit" className="btn btn-neutral mt-4">Login</button>
//                      </fieldset>
//                   </form>
//                   <div className="text-center">
//                      Don't have an account? <Link to='/register' className="text-[#FF9D23] font-bold">Sign Up</Link>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );

// };
// export default Login
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { useAuthStore } from "../../Store/useAuthStore";
import AuthImagePattern from "../../Components/skeletons/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
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
                  <Lock className="h-5 w-5 text-base-content/40" />
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
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </div>
  );
};
export default LoginPage;