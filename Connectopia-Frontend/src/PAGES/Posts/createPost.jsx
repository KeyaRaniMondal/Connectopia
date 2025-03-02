import { MdPostAdd } from "react-icons/md"
import PostForm from "./postForm"

const CreatePost=()=>{
    return(
        <div className="">
            <div className="flex justify-center mx-auto gap-5">
            <MdPostAdd className="font-bold text-5xl"/>
            <h2 className="font-bold text-2xl">create Post</h2>
            </div>
            <PostForm></PostForm>
        </div>
    )
}
export default CreatePost