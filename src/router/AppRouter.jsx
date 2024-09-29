import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Homeapp from "../components/Homeapp";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import CinemaSelection from "../components/CinemaSelection";
import ChooseSeat from "../components/ChooseSeat";
import ProtectedRoute from "../components/ProtectedRoute";  // Importamos el componente ProtectedRoute

const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />

      {/* Rutas protegidas */}
      <Route
        path="/HomeApp"
        element={
          <ProtectedRoute>
            <Homeapp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/CinemaSelection/:id/:id_funcion"
        element={
          <ProtectedRoute>
            <CinemaSelection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ChooseSeat/:id_funcion"
        element={
          <ProtectedRoute>
            <ChooseSeat />
          </ProtectedRoute>
        }
      />

      {/* Redireccionar cualquier otra ruta a Home */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;

