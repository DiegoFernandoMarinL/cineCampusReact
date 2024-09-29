// Función para obtener el valor de una cookie por su nombre
export function getCookie(nombre) {
    const name = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Verifica si el usuario está autenticado
export function isAuthenticated() {
    const usuarioCookie = getCookie("usuario");  // Nombre de tu cookie
    return usuarioCookie !== "";  // Si la cookie existe, está autenticado
}
