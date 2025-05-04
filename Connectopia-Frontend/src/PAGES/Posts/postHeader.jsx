import { useAuthStore } from "../../Store/useAuthStore";
import { usePostStore } from "../../Store/usePostStore";


const PostHeader = () => {
const{authUser}=useAuthStore()
  return (
    <div className="p-2.5 border-b border-base-300 bg-black w-[700px] flex mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {
            authUser._id==postMessage._id
          }
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={authUser?.profilePic || "/avatar.png"} alt={authUser?.fullName} />
            </div>
          </div>

          <div>
            <h3 className="font-medium">{authUser?.fullName}</h3>
            <p className="text-sm text-base-content/70">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostHeader;