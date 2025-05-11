import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        postedBy: {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            username: String,
            userProfilePic: String
        },

        text: {
            type: String,
            maxLength: 500,
        },
        img: {
            type: String,
        },
        sharedFrom: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            },
            username: String,
        },

        likes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            default: [],
        },
        replies: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                text: {
                    type: String,
                    required: true,
                },
                userProfilePic: {
                    type: String,
                },
                username: {
                    type: String,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;