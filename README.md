# FinalProject1

Este proyecto consiste en la finalización del Bootcamp de IronHack y pretende una puesta en uso de todos los conceptos y tecnologías aprendidas durante el mismo a lo largo de las 15 semanas a jornada parcial. Se destinó un total de 4 semanas para desarrollar este proyecto final. 

<br>

## ¿En qué consiste el proyecto?

El proyecto consiste en unas directrices marcadas por la propia escuela para desarrollar una aplicación de tareas sencillas con Vue.js que permite a los usuarios crear una cuenta, registrar tareas, editarlas y marcarlas como completas. La aplicación estará vinculada a una base de datos, donde se almacenarán todos los datos de usuarios y tareas. La base de datos para este proyecto es Supabase. También se usó Vite como una herramienta de compilación para compilar el código y proporcionar un servidor de desarrollo mientras trabajamos.

Se ha usado una biblioteca de interfaz como Bootstrap para darle estilos al proyecto, así como estilos propios. 

<br>

## Requerimientos del proyecto

- Tener un repositorio en GitHub
- La Aplicación debe mostrarse en un navegador
- La aplicación debe implementarse en línea utilizando un servicio en la nube como Netlify
- Seguit los principios KISS (Keep It Simple, Stupid) y DRY (Don't Repeat Yourself).
- La plicación debe tener un estilo usando CSS
- La aplicación debe estar completamente integrada con una base de datos Supabase usando todas las operaciones CRUD
- Se debe usar Pinia de Vue para implementar completamente el manejo de estado
- Se debe manejar cualquier operación asíncrona usando Promises o Async/await

<br>

## Especificaciones técnicas

**Cliente:** Vue.js , Vite (servidor de desarrollo)
**Enrutador:** enrutador Vue
**Tienda:** Pinia y Pinia Persist para inicio de sesión persistente
**Base de datos como servicio:** Supabase

<br>

## Una breve descripción del flujo de información en el proyecto

La estructura del proyecto es como sigue:
```javascript
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── logo.png
│   │   ├── pinia.svg
│   │   └── supabase.png
│   ├── components
│   │   ├── FooterStick.vue
│   │   ├── MyTable.vue
│   │   └── NavBar.vue
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   ├── tasks.js
│   │   └── user.js
│   ├── pages
│   │   ├── Auth.vue
│   │   └── Dashboard.vue
│   ├── Supabase
│   │   └── index.js
│   ├── Views
│   │   ├── AuthView.vue
│   │   ├── HomeView.vue
│   │   ├── SignInView.vue
│   │   └── SignUpView.vue
├── App.vue
└── vite.config.js
```
En la App.vue se desplega todo y tenemos RouterView que muestra lo que tenemos en la carpeta Views. Para ello se necesita de la carpeta Router donde se almacenará el archivo .js con las rutas. Los componentes que hay dentro de la carpeta son los mismos que están en la carpeta Views para que se pueda hacer el Router_link correspondiente allí donde queremos que aparezca dentro de la App.Vue.

Una vez que se han creado las rutas se ha trabajdo en la autenticación para almacenar dichos datos en la carpeta de Stores en el archivo user. Para que una vez que un usuario esté autenticado pueda acceder a la vista de HomeView.vue usando, mediante supabase, las funciones correspondientes para hacer logIn o LogOut. A su vez también se creo el archivo tasks.js en la carpeta stores pues tiene todas las funcionalidades que nos brinda Supabase para realizar las tareas CRUD (crear, borrar, editar,) que está asociada a cada usuario.

Una vez que conseguimos entrar a HomeView, dentro de ella hay un componente que se ha llamado MyTable que contiene las tablas de tareas que cada usuario irá almacenando.








