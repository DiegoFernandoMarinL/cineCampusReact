import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/cookie';  // Importamos la función que verifica la cookie

const ProtectedRoute = ({ children }) => {
    // Si el usuario no está autenticado (no tiene la cookie), lo redirige a /login
    if (!isAuthenticated()) {
        return <Navigate to="/" />;
    }

    // Si está autenticado, muestra el componente hijo
    return children;
};

export default ProtectedRoute;
