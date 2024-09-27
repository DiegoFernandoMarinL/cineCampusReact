// Función que valida el formato de un correo electrónico

export const validarCorreo = async (e) => {
    const input = e.target;
    const correo = input.value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      input.setCustomValidity('Por favor, ingresa un correo válido');
    } else {
      try {
        // Hacer la consulta con GET pasando el correo en la URL
        const response = await fetch(`http://localhost:5000/validar-correo?email=${encodeURIComponent(correo)}`, {
            method: 'GET',
        });

        const result = await response.json();
        
        if (result.valido) {
          input.setCustomValidity(''); // Si el nombre es válido, limpia el mensaje de error
        } else {
            input.setCustomValidity(result.mensaje || 'El correo ya existe');
        }
      } catch (error) {
          console.error('Error al validar el correo:', error);
          input.setCustomValidity('Error de validación, inténtalo de nuevo.');
      }
    }
    input.reportValidity();
};

// Validación del nombre
export const validarNombre = async (e) => {
  const input = e.target;
  const nombre = input.value;
  
  input.setCustomValidity('');
    if (nombre.length < 3) {
        input.setCustomValidity('El nombre debe tener al menos 3 caracteres');
    } else {
      try {
        // Hacer la consulta con GET pasando el nombre en la URL
        const response = await fetch(`http://localhost:5000/validar-nombre?nombre=${encodeURIComponent(nombre)}`, {
            method: 'GET',
        });

        const result = await response.json();
        if (result.valido) {
          input.setCustomValidity(''); // Si el nombre es válido, limpia el mensaje de error
        } else {
            input.setCustomValidity(result.mensaje || 'El nombre ya existe');
        }
      } catch (error) {
          console.error('Error al validar el nombre:', error);
          input.setCustomValidity('Error de validación, inténtalo de nuevo.');
      }
    }
    input.reportValidity();
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

// validacion login
export const validarLogin = async (e) => {
  const input = e.target;
  const nombre = input.value;
  
  input.setCustomValidity('');
    if (nombre.length < 3) {
        input.setCustomValidity('El nombre debe tener al menos 3 caracteres');
    } else {
      try {
        // Hacer la consulta con GET pasando el nombre en la URL
        const response = await fetch(`http://localhost:5000/validar-nombre?nombre=${encodeURIComponent(nombre)}`, {
            method: 'GET',
        });

        const result = await response.json();
        if (result.valido) {
          input.setCustomValidity(''); // Si el nombre es válido, limpia el mensaje de error
        } else {
            input.setCustomValidity(result.mensaje || 'El nombre ya existe');
        }
      } catch (error) {
          console.error('Error al validar el nombre:', error);
          input.setCustomValidity('Error de validación, inténtalo de nuevo.');
      }
    }
    input.reportValidity();
  };  