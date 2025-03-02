import { useForm } from "react-hook-form";

const PostForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) =>{
const formData=new FormData()
formData.append("email",data.email)
formData.append("caption",data.caption)
formData.append("photo",data.photo)

try{
  const response=await fetch("/createdPosts",{
    method:"POST",
    body:formData
  })
  if(!response.ok){
    throw new Error("Failed to create post")
  }
  const result=await response.json()
  console.log("post created",result)
}
catch(error){
console.error("Error creating post: ",error)
}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10">
      <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Caption</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Caption for post"
          {...register("caption", { required: true })}
        />
        <p className="fieldset-label mt-2">
          You can edit the page title later from settings.
        </p>
      </fieldset>
      <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">upload photo</legend>
        <input
          type="file"
          className="file-input file-input-neutral w-full"
          placeholder="Caption for post"
          {...register("caption")}
        />
      </fieldset>

      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
};

export default PostForm;