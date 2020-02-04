const { app,BrowserWindow,ipcMain} = require('electron');

app.on('ready',()=>{
    const win = new BrowserWindow({
        width:1024,
        height:768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");
    console.log('main!');
});

ipcMain.on('handle-click',(event,arg)=>{
    console.log("click!!",arg)
});

