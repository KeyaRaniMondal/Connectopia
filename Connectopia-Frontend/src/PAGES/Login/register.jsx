import { Input } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const navigate=useNavigate()
    
    const { createUser } = useAuth()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            userName: '',
            email: '',
            password: ''
        }
    });
    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.userName, data.email, data.password);
            console.log(result)
            const firebaseUser = result.user

            const newUser = {
                userName:data.userName,
                email:data.email,
                firebaseUID: firebaseUser.uid
            }

            const response = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            })
            const mongoResult = await response.json()


            if (response.ok) {
                alert("User registered successfully!");
                navigate("/featuredPosts");
            } else {
                alert("Failed to save user to database.");
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col min-w-screen">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">UserName</label>
                                <Controller
                                    name="userName"
                                    control={control}
                                    render={({ field }) => <Input {...field} type="text" placeholder="Enter your user name" />}
                                />

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

                                <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                            </fieldset>
                        </form>
                        <div className="text-center">
                            Already have an account? <Link to='/login' className="text-[#FF9D23] font-bold">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register