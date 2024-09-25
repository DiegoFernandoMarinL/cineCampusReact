import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Homeapp from "../components/Homeapp"
import LogIn from "../components/LogIn"
import SignUp from "../components/SignUp"
import CinemaSelection from "../components/CinemaSelection"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/HomeApp" element={<Homeapp />} />
      <Route path="/CinemaSelection" element={<CinemaSelection />} />
      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>  
  )
}

export default AppRouter
