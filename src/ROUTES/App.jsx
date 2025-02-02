import { Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"
import Home from "../PAGES/Home/home"

function App() {

  return (
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home />} />
    </Route>
</Routes>
  )
}

export default App
