import { useAuthStore } from "../../Store/useAuthStore"
import PostForm from "./postForm"

const CreatePost = () => {
    const { authUser } = useAuthStore()
    return (
        <div className="w-[600px] h-40 bg-base-300 px-5 rounded-lg mx-auto">
            <div className="flex justify-between">
                <div className="avatar my-10">
                    <div className="w-24 h-24 rounded-full">
                        <img src={authUser?.profilePic} />
                    </div>
                </div>
                <div className="my-16">
                    <input type="text" onClick={() => document.getElementById('my_modal_3').showModal()}
                        placeholder={` What's on your mind, ${authUser.fullName}?`}
                        className="input input-lg w-[430px] rounded-full"
                    />
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                           <PostForm ></PostForm>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>

    )
}
export default CreatePost