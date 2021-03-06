const { app, BrowserWindow } = require('electron')

function ventanaPrincipal(){

    const ventana = new BrowserWindow({
        width: 500,
        heigth: 500,
        webPreferences: ({
            nodeIntegration: true
        })
    })

    ventana.loadFile('./formulario.js')
}

app.whenReady().then(ventanaPrincipal)