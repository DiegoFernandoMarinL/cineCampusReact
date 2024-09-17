import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../components/Home"
import LogIn from "../components/LogIn"
import SignUp from "../components/SignUp"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />

      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>  
  )
}

export default AppRouter
