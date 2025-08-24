# Usa una imagen base oficial de Node.js.
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia los archivos de configuraci\u00f3n de dependencias.
COPY package*.json ./

# Instala las dependencias del proyecto.
RUN npm install

# Copia el resto de los archivos de la aplicaci\u00f3n.
COPY . .

# Ejecuta las pruebas unitarias usando npx para evitar problemas de permisos.
RUN npx mocha

# Expone el puerto que la aplicaci\u00f3n usa dentro del contenedor.
EXPOSE 3000

# Define el comando para ejecutar la aplicaci\u00f3n cuando se inicia el contenedor.
CMD ["node", "app.js"]
