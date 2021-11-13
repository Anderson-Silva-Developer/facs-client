const {Tray} = require('electron')
const{resolve} =require('path')
const icoPath=resolve(__dirname,'../','assets','face.png')

function createTray(){
    const tray=new Tray(icoPath)
    tray.setToolTip('facs client')
    return tray

}
module.exports=createTray()