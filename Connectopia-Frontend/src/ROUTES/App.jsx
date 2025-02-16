import { Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"
import Home from "../PAGES/Home/home"
import Login from "../PAGES/Login/login"
import Register from "../PAGES/Login/register"

function App() {

  return (
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    </Route>
</Routes>
  )
}

export default App
