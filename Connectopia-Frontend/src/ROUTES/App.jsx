import { Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"
import Home from "../PAGES/Home/home"
import Login from "../PAGES/Login/login"
import Register from "../PAGES/Login/register"
import Profile from "../PAGES/Profile/Profile"
import UserProfile from "../PAGES/Profile/userProfile"
import CreatePost from "../PAGES/Posts/createPost"
import FeaturedPost from "../PAGES/FeaturedPosts/allPosts"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="featuredPost" element={<FeaturedPost />} />
      </Route>
      <Route path="profile" element={<Profile />}>
        <Route index element={<UserProfile />} />
        <Route path="createPost" element={<CreatePost />} />
      </Route>
    </Routes>
  )
}

export default App
