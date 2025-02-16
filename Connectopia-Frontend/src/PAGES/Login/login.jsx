
// const Login=()=>{
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()


//   const onSubmit = (data) => console.log(data)


//   console.log(watch("example")) 


//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />


//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}


//       <input type="submit" />
//     </form>
//   )
// }
// export default Login

// import Select from "react-select";
import { Input } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
// import Input from "@material-ui/core/Input";

const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = data => console.log(data);

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

          </div>
        </div>
      </div>
    </div>
  );
};
export default Login