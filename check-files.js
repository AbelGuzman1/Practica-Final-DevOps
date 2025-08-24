const fs = require('fs');
const path = require('path');

// Nombres de los archivos a verificar
const filesToCheck = ['Dockerfile', '.dockerignore'];

// Funci\u00f3n para verificar la existencia de un archivo
function checkFileExists(filePath) {
  try {
    // fs.existsSync() verifica si la ruta existe.
    // fs.statSync() obtien informaci\u00f3n del archivo y falla si no existe.
    fs.statSync(filePath);
    return true;
  } catch (e) {
    return false;
  }
}

console.log('--- Verificando la existencia de archivos ---');

// Itera sobre la lista de archivos y muestra el resultado
filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, file);
  const fileExists = checkFileExists(filePath);

  if (fileExists) {
    console.log(`\u2705 El archivo '${file}' S\u00cd existe.`);
  } else {
    console.log(`\u274c El archivo '${file}' NO existe.`);
  }
});