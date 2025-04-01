import { Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"
import Home from "../PAGES/Home/home"
import Login from "../PAGES/Login/login"
import Register from "../PAGES/Login/register"
import Profile from "../PAGES/ProfilePage/Profile"
import UserProfile from "../PAGES/ProfilePage/userProfile"
import CreatePost from "../PAGES/Posts/createPost"
import FeaturedPost from "../PAGES/FeaturedPosts/allPosts"
import { useAuthStore } from "../Store/useAuthStore"
import { useEffect } from "react"

function App() {

  const { authUser, checkAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
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
