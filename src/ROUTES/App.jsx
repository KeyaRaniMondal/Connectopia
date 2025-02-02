import { Route, Routes } from "react-router"
import MainLayout from "../Layouts/mainLayout"

function App() {

  return (
    <Routes>
    <Route index element={<MainLayout/>} />
</Routes>
  )
}

export default App
