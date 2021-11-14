const {app,Menu} = require('electron')
const controlWindow=require("./ControlWindow")

function App(){
  const win=require("./CreateWindow.js")
  const tray=require("./Tray.js")
  console.log(win.getBounds())
  const {toggle} =controlWindow(win,tray)
  tray.on('click',toggle)

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' }
  ])
 
  // tray.popUpContextMenu(contextMenu)

}
  app.whenReady().then(() => {
    App()
  })
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })