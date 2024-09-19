// Función que valida el formato de un correo electrónico

export const validarCorreo = (e) => {
    const input = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      input.setCustomValidity('Por favor, ingresa un correo válido');
    } else {
      input.setCustomValidity('');
    }
};

// Validación del nombre
export const validarNombre = (e) => {
    const input = e.target;
    if (input.value.length < 3) {
        input.setCustomValidity('El nombre debe tener al menos 3 caracteres');
      } else {
        input.setCustomValidity(''); // Reinicia el mensaje de error si todo está bien
      }
  };

 // Validación de la contraseña
export const validarPassword = (e) => {
    const input = e.target;
    if (input.value.length < 6) {
        input.setCustomValidity('La contraseña debe tener al menos 6 caracteres');
      } else {
        input.setCustomValidity('');
      }
  };