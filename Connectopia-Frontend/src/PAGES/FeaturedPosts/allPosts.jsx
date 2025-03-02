import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const FeaturedPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const{user}=useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/createdPosts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post._id} className="card bg-base-100 w-96 shadow-sm">
          <div className="flex ml-10 gap-5 mt-2">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                <img src={user.photoURL}/>
              </div>
            </div>
            <h2 className="card-title">
              {post.caption || "Card Title"}
            </h2>
          </div>

          {
            post.photo && (
              <figure>
                <img src={post.photo} alt={post.caption || "Post Image"} />
              </figure>
            )
          }

          <div className="card-body">
            <p>{post.description || "A card component has a figure, a body part, and inside body there are title and actions parts"}</p>
            <div className="card-actions justify-end">
              {post.tags?.map((tag, index) => (
                <div key={index} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPost;