import { useAuthStore } from "../../Store/useAuthStore";

const PostHeader = ({ post }) => {
  const { authUser } = useAuthStore();
  const isOwner = String(authUser?._id) === String(post?.postedBy?.userId);

  return (
    <div className="p-2.5 border-b border-base-300 bg-black w-[700px] flex mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={post?.postedBy?.userProfilePic || "/avatar.png"} alt={post?.postedBy?.username || "User Avatar"} />
            </div>
          </div>

          <div>
            <h3 className="font-medium">
              {post?.postedBy?.username || "Anonymous"}
              {isOwner && (
                <span className="ml-1 text-xs text-green-400">(you)</span>
              )}
            </h3>
            <p className="text-sm text-base-content/70">
              {/* Add time info here if needed */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
