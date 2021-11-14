function ControlWindow(win, tray) {
    function toggle() {
      if(win.isVisible()) {
        win.hide()
      } else {
        show()
      }
    }
    function show() {
        win.center()
        win.show()
        win.focus()
      }

      return {
        toggle
      }
}
module.exports = ControlWindow