# djangoReact
CRUD Django React/vite Mysql


Arquitectura Básica de una Aplicación Django y React
Django (Backend):

API RESTful: Django se encarga de gestionar la lógica del servidor, interactuar con la base de datos y proporcionar una API RESTful utilizando Django REST Framework.
Rutas y Vistas: Define las rutas (endpoints) y vistas que manejan las solicitudes HTTP (GET, POST, PUT, DELETE).
Serializadores: Convierte los datos de los modelos Django a formato JSON para enviarlos al frontend y viceversa.
Autenticación y Permisos: Gestiona la autenticación de usuarios y permisos para acceder a diferentes partes de la API.
React (Frontend):

Componentes: Define componentes de interfaz de usuario que se encargan de la presentación y lógica de interacción.
Estados y Propiedades: Gestiona el estado de la aplicación y la comunicación entre componentes.
Axios (u otra librería): Hace solicitudes HTTP a la API RESTful de Django para obtener o enviar datos.
Routing (React Router): Gestiona la navegación entre diferentes vistas de la aplicación.
Flujo de Trabajo
Solicitud desde el Frontend:

Un usuario interactúa con la interfaz de React (por ejemplo, al hacer clic en un botón para obtener una lista de ítems).
React realiza una solicitud HTTP (GET, POST, PUT, DELETE) a la API de Django utilizando Axios o Fetch.
Procesamiento en el Backend:

Django recibe la solicitud en una ruta definida en urls.py.
La vista correspondiente (definida en views.py) maneja la solicitud.
Si la solicitud es para obtener datos (GET), la vista consulta la base de datos y utiliza un serializador para convertir los datos en formato JSON.
Si la solicitud es para crear, actualizar o eliminar datos (POST, PUT, DELETE), la vista valida y procesa los datos, actualiza la base de datos y responde con el resultado.
Respuesta al Frontend:

Django envía una respuesta HTTP en formato JSON.
React recibe la respuesta y actualiza el estado de la aplicación, lo que a su vez actualiza la interfaz de usuario para reflejar los nuevos datos
