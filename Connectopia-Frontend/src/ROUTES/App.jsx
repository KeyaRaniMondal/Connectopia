import { Navigate, Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"
import Home from "../PAGES/Home/home"
import Login from "../PAGES/Login/login"
import Profile from "../PAGES/ProfilePage/Profile"
import UserProfile from "../PAGES/ProfilePage/userProfile"
import CreatePost from "../PAGES/Posts/createPost"
import FeaturedPost from "../PAGES/FeaturedPosts/allPosts"
import { useAuthStore } from "../Store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import SplashScreen from "../PAGES/Home/splashScreen"
import SignUpPage from "../PAGES/Login/register"

function App() {

  const { authUser, checkAuth,  isCheckingAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log({ authUser });

  if ( isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<SplashScreen />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/home" element={authUser?<Home />:<Navigate to={'/login'}/>} />
        <Route path="/login" element={!authUser?<Login />:<Navigate to={'/home'}/>} />
        <Route path="/signup" element={!authUser?<SignUpPage/>:<Navigate to={'/home'}/>} />
        <Route path="/featuredPost" element={<FeaturedPost />} />
      </Route>
      {/* <Route path="/profile" element={<Profile />}>
        <Route index element={<UserProfile />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Route> */}
    </Routes>
  )
}

export default App
