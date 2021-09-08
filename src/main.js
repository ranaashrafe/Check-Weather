
const { app, BrowserWindow} = require('electron')
const url=require("url");
const path=require("path");
require('@electron/remote/main').initialize();
const { electron } = require('process');
let mainWin;


const createWindow= ()=>{
    mainWin=new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,    
            contextIsolation: false,
            enableRemoteModule: true,
            },
        width:1200,
        height:600,
        backgroundColor:"#ffffff",
        autoHideMenuBar:true,
        kiosk:true,
        fullscreen:true,
       skipTaskbar:true,
      alwaysOnTop:true,  
 
    });
 // mainWin.webContents.openDevTools()
    mainWin.loadURL(url.format({
        pathname:path.join(__dirname,"views/GetWeather.html"),
        protocol:"file",
        slashes:true
    }));
    
 let contents = mainWin.webContents

 var child = require('child_process').execFile;
var executablePath = "C:\\Users\\DEV\\source\\repos\\WinFormsApp1\\WinFormsApp1\\bin\\Debug\\netcoreapp3.1\\WinFormsApp1.exe";
var parameters = ["--incognito"];

child(executablePath, parameters, function(err, data) {
     console.log(err)
     console.log(data.toString());
});
 mainWin.on("closed",()=>{
    mainWin=null;
    app.quit();
});

}

app.on("ready",async()=>{
await createWindow();

console.log(contents);
})

