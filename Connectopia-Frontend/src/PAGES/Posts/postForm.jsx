import { useRef, useState } from "react";
import { PlusIcon } from "lucide-react";
import { useAuthStore } from "../../Store/useAuthStore";
import EmojiPicker from "emoji-picker-react";
import { MdEmojiEmotions } from "react-icons/md";
import toast from "react-hot-toast";
import { usePostStore } from "../../Store/usePostStore";

const PostForm = () => {
    const { authUser } = useAuthStore();
    const { createPost } = usePostStore();

    const fileInputRef = useRef(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileClick = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // base64 image
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePostSubmit = async () => {
        try {
            await createPost({
                text,
                img: image,
            });
            toast.success("Post created successfully");
            setText("");
            setImage(null);
            setShowEmojiPicker(false);
            document.getElementById("my_modal_3")?.close();
        } catch (error) {
            toast.error(error.message);
        }
    };


    return (
        <div>
            <h2 className="text-xl text-center">Create Post</h2>
            <div className="divider divider-neutral"></div>

            <div className="flex gap-5 mb-5">
                <div className="avatar avatar-online">
                    <div className="w-18 rounded-full">
                        <img src={authUser?.profilePic} />
                    </div>
                </div>
                <h2 className="text-lg mt-5">{authUser.fullName}</h2>
            </div>

            <textarea
                placeholder={`What's on your mind? ${authUser.fullName}`}
                className="textarea textarea-neutral w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div
                className="w-full h-28 mt-5 border border-dashed flex items-center justify-center cursor-pointer"
                onClick={handleFileClick}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <div className="text-center">
                    <PlusIcon className="w-6 h-6" />
                    <h2 className="text-lg -ml-14">Add Photos/Videos</h2>
                </div>
            </div>

            {image && <img src={image} alt="preview" className="mt-2 max-h-60" />}

            <div className="w-full h-28 bg-neutral-800 mt-5 p-3 relative">
                <h2 className="text-md mb-2 text-white">Add to your post</h2>
                <div className="flex justify-between">
                    <MdEmojiEmotions
                        size={24}
                        className="text-yellow-400 cursor-pointer"
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                    />
                    {showEmojiPicker && (
                        <div className="absolute top-16 z-10">
                            <EmojiPicker
                                onEmojiClick={(emojiData) =>
                                    setText((prev) => prev + emojiData.emoji)
                                }
                            />
                        </div>
                    )}
                    <button
                        className="btn btn-soft btn-warning"
                        onClick={handlePostSubmit}
                        disabled={loading}
                    >
                        {loading ? "Posting..." : "Post"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostForm;
