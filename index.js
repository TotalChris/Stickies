const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    },
    skipTaskbar: true,
    frame: false,
    transparent: true,
    maximizable: false,
    minimizable: false,
    fullscreenable: false
  })

  win.loadFile('index.htm')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})