# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Cine Campus

## 1. Levantar el servidor de fronted y backend 

Para levantar el servidor fronted se haran los siguientes pasos 

- Desde la terminal de visual, desde la ruta del proyecto instalar dependencias con el comando 

  ```
  npm install
  ```

- Cuando ya este instalado las dependencias, levantar el servidor con el comando

  ```
  npm run dev
  ```

- En consola se mostrara lo siguiente 

  ```
   VITE v5.4.6  ready in 3703 ms
  
    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
  ```

- Abrir la ruta que corresponde al dato Local (Abrir en navegador Google y abrir  con la extension simulador movil)

#### Nota:  Abrir otra terminal para abrir el servidor backend 

Para levantar el servidor backend se haran los siguientes pasos 

- Desde la terminal de visual, desde la ruta del proyecto, ir a la carpeta api con el comando

  ```
  cd api
  ```

- Ya en la carpeta api instalar dependencias con el siguiente comando

  ```
  npm install
  ```

- Cuando ya este instalado las dependencias, levantar el servidor con el comando

  ```
  npm run start
  ```

- En consola se mostrara lo siguiente 

  ```
  Servidor escuchando en http://localhost:5000
  ```

## 2. Interfaz Cine Campus

- En la primera vista, encontrara el logo y dos botones 

  Sign In: Para iniciar sesion si ya tiene un usuario registrado en al base de datos 

  Create Account: Para crear un nuevo usuario  

- Al entrar al la vista home, encontrara las funciones disponibles con su respectiva pelicula, la cual podra dar click y se abrira la vista de detalle de pelicula y lugar donde esta disponible la funcion

- Al dar click en el boton de Book now podra escojer los asientos que desea comprar

