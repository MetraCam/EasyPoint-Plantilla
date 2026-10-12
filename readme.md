# Configuración de Electron y Node.js

## Primero instalar Node en el ordenador
### Desde el Powershell
winget install OpenJS.NodeJS.LTS


## Comandos de Terminal

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm init -y
npm install electron --save-dev
npm start


package.json:
{
  "name": "easypoint-desktop",
  "version": "1.0.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {}
}
