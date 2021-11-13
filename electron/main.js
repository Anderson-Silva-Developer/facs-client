const {app} = require('electron')

function App(){
  const win=require("./CreateWindow.js")
  const tray=require("./Tray.js")

  tray.on('click',()=>console.log("teste"))
}
  app.whenReady().then(() => {
    App()
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })