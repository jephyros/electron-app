const { app,BrowserWindow,ipcMain} = require('electron');



function createWindow(){
    const win = new BrowserWindow({
        width:1024,
        height:768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");
    // 개발자 도구를 엽니다.
    win.webContents.openDevTools()
    
    console.log('main:');
}

app.on('window-all-closed',()=>{
    if(process.platform != 'darwin'){
        app.quit();
    }
});



app.on('ready',()=>{
    createWindow();
});
app.on('activate',()=>{
    createWindow();
});

ipcMain.on('handle-click',(event,arg)=>{
    console.log("click!!",arg)
});

