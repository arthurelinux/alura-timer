const { app, BrowserWindow, ipcMain } = require ("electron");
const data = require('./data');

//const { BrownerWindow } = require ("electron");

app.on('ready', () => {
 //console.log("olá mundo");
 let mainWindow = new BrowserWindow({
     width: 600,
     height: 400,
     webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      },
 })
 mainWindow.loadURL(`file://${__dirname}/app/index.html`);
 //mainWindow.loadURL("https://colab.centraldaeconomia.com");

})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () =>{
    if( sobreWindow == null){
         sobreWindow = new BrowserWindow({
            width: 300,
            height: 300,
            alwaysOnTop: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
              },
        })
       
    }
    sobreWindow.on('closed', () => {
        sobreWindow = null;
    })
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
})

ipcMain.on('curso-parado', (event,curso, tempoEstudado) => {
    console.log(`O curso ${curso} foi estudado por ${tempoEstudado}`);
    data.salvaDados(curso, tempoEstudado);
});