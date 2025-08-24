# Usa la imagen oficial de Node.js como imagen base
FROM node:18-alpine

# Copia los archivos de manifiesto e instala las dependencias
COPY package*.json ./
RUN npm install --only=production

# Copia el resto de los archivos de la aplicaci\u00f3n
COPY . .

# Expone el puerto en el que se ejecutar\u00e1 la aplicaci\u00f3n
EXPOSE 3000

# Comando para iniciar la aplicaci\u00f3n
CMD ["node", "app.js"]