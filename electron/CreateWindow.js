const {BrowserWindow} = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width:250,
      height: 310,  
      x: 0,
      y: 0,    
      show:false,
      frame:false,
      resizable:false,
      fullscreenable:false,
      titleBarStyle:'hidden',
      alwaysOnTop:true
    })
  
    win.loadFile('index.html')    
    return win
  }
  module.exports=createWindow()