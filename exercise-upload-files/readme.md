Empieza configurando un proyecto desde 0. Recuerda:

npm init (o npm init -y)
npm i express mongoose
npm i -D nodemon
genera toda la estructura de carpetas y ficheros correspondientes
Necesitamos crear una aplicación que gestione usuarios.

Modelo (todos requeridos)

name (String)
username (String, único)
email (String, único)
birthdate (Date)
profile_pic (String)
enabled (Boolean, default true)
Rutas

POST para crear un nuevo usuario.
GET para obtener los siguientes datos del usuario (mientras enabled sea true. Si no, debería devolver error con que el usuario no existe)
username
age (sí, edad)
profile_pic
PUT para modificar cualquiera de los datos (enabled no se puede modificar)
PATCH para suspender la cuenta del usuario cambiando el campo enabled a false
PATCH para reactivar la cuenta del usuario cambiando el campo enabled a true
DELETE para eliminar permanentemente la cuenta del usuario
Haz todos los middlewares que quieras y creas conveniente