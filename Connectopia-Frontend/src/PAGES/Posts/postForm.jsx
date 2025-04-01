import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const PostForm = () => {
  const navigate=useNavigate()
  const { register, handleSubmit } = useForm();
  // for submiting posts
  // const onSubmit = async (data) => {
  //   const formData = new FormData()
  //   formData.append("email", data.email)
  //   formData.append("caption", data.caption)
  //   formData.append("description", data.description)
  //   formData.append("photo", data.photo[0])

  //   try {
  //     const response = await fetch("http://localhost:5000/createdPosts", {
  //       method: "POST",
  //       body: formData
  //     })
  //     if (!response.ok) {
  //       throw new Error("Failed to create post")
  //     }
  //     const result = await response.json()
  //     console.log("post created", result)
  //     navigate('/featuredPost')
  //   }
  //   catch (error) {
  //     console.error("Error creating post: ", error)
  //   }
  // }
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("caption", data.caption);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]); // Ensure this is the correct file input
  
    try {
      const response = await fetch("http://localhost:5000/createdPosts", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      const result = await response.json();
      console.log("Post created:", result);
      navigate('/featuredPost');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

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
        <legend className="fieldset-legend">Description</legend>
        <textarea
         type="text"
          placeholder="post description" 
          className="textarea textarea-neutral w-full"
          {...register("description")}
          ></textarea>
        <p className="fieldset-label mt-2">
          You can edit the page title later from settings.
        </p>
      </fieldset>

      <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">upload photo</legend>
        <input
          type="file"
          className="file-input file-input-neutral w-full"
          placeholder="Photo for post"
          {...register("photo")}
        />
      </fieldset>

      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
};

export default PostForm;