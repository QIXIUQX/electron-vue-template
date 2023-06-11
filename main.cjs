const { BrowserWindow, app } = require("electron");
const path = require("path")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    y:120,
    autoHideMenuBar:true,
    icon:path.join(__dirname,"./appIcon/xxxxx.ico"),
    // resizable:false,
  });
  // win.loadURL("http://localhost:5173/");
  win.loadURL("http://localhost:8088/");
  win.webContents.openDevTools()
};
app.whenReady().then(() => {
  createWindow();
});
