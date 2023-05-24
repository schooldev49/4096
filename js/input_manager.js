import event_handler from "./event_handler";
class input_manager {
  constructor(tableIn) {
    // input manager
    this.listeners = {};
    this.tableIn = {
      current: tableIn,
      get a(){
        return current
      },
      set a(tab){
        current = tab;
        removeEventListener("keydown", this.listeners[0]) // mousedown,up,keyup
        removeEventListener("mousedown", this.listeners[1])
        removeEventListener("mouseup", this.listeners[2])
        removeEventListener("keyup", this.listeners[3]);
        listen();
      }
    };
    this.keys = {
      Alt: 0,
      AltGraph: 0,
      CapsLock: 0,
      Control: 0,
      Fn: 0,
      FnLock: 0,
      Hyper: 0,
      Meta: 0,
      NumLock: 0,
      ScrollLock: 0,
      Shift: 0,
      Super: 0, 
      Symbol: 0,
      SymbolLock: 0,
      Enter: 0,
      Tab: 0,
      " ": 0, // space LOL
      ArrowDown: 0,
      ArrowLeft: 0,
      ArrowUp: 0,
      ArrowRight: 0,
      End: 0,
      Home: 0,
      PageDown: 0,
      PageUp: 0,
      Backspace: 0,
      Clear: 0,
      Copy: 0,
      CrSel: 0,
      Cut: 0,
      Delete: 0,
      EraseEof: 0,
      ExSel: 0,
      Insert: 0,
      Paste: 0,
      Redo: 0,
      Undo: 0,
      Accept: 0,
      Again: 0,
      Attn: 0,
      Cancel: 0,
      ContextMenu: 0,
      Escape: 0,
      Execute: 0,
      Find: 0,
      Help: 0,
      Pause: 0,
      Play: 0,
      Props: 0, 
      Select: 0,
      ZoomIn: 0,
      Zoomout: 0,
      BrightnessDown: 0,
      BrightnessUp: 0,
      Eject: 0,
      LogOff: 0,
      Power: 0,
      PowerOff: 0,
      PrintScreen: 0,
      Hibernate: 0,
      Standby: 0,
      WakeUp: 0,
      KanjiMode: 0, // asian mode
      F1: 0,
      F2: 0,
      F3: 0,
      F4: 0,
      F5: 0,
      F6: 0,
      F7: 0,
      F8: 0,
      F9: 0,
      F10: 0,
      F11: 0,
      F12: 0,
      Multiply: 0,
      Add: 0,
      Clear: 0,
      Divide: 0,
      Subtract: 0,
      Separator: 0,
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0, 
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0, 
      y: 0,
      z: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      G: 0,
      H: 0,
      I: 0,
      J: 0, 
      K: 0,
      L: 0,
      M: 0,
      N: 0,
      O: 0,
      P: 0,
      Q: 0,
      R: 0,
      S: 0,
      T: 0,
      U: 0,
      V: 0,
      W: 0,
      X: 0, 
      Y: 0,
      Z: 0,
      mbutton: 0
    }
  }

  getKeyDown = (w) => {
    if (this.keys[w] == 1){
      return true;
    }
    return false;
  }

  listen = () => {
    this.listeners[0] = this.tableIn.addEventListener("keydown", (event) => {
      keyDown(event);
    })
    this.listeners[1] = this.tableIn.addEventListener("mousedown", (event) => {
      mouseDown(event)
    })
    this.listeners[2] = this.tableIn.addEventListener("mouseup", (event) => {
      mouseUp(event);
    })
    this.listeners[3] = this.tableIn.addEventListener("keyup", (event) => {
      keyUp(event);
    })
  }

  keyUp = (event) => {
    if (event.isComposing || event.keyCode == 229){
        return
      }
    if (this.keys[w]){
        this.keys[w] = 0;
    }
  }

  keyDown = (event) => {
    if (event.isComposing || event.keyCode == 229) {
      return
    }
    if (this.keys[w]){
      this.keys[w] = 1;
    }
  }

  mouseUp = (event) => {
     this.keys["mbutton"] = 0; 
  }

  mouseDown = (event) => {
    this.keys["mbutton"] = 1;
  }

  
}

export default input_manager ;