class tile {
  constructor(table, val, row, col, img){
    this.table = { 
      current: table,
      get a() {
        return current;  
      },
      set a(tab) {
        current = tab; 
      }
    };
    this.val = {
      current: val,
      get a(){
        return current;
      },
      set a(tab){
        // set text
        current = tab;
      }
    };
    this.row = { 
      current: row,
      get a(){
        return current;
      },
      set a(tab){
        // change position
        current = tab;
      }
    };
    this.col = {
      current: col,
      get a(){
        return current;
      },
      set a(tab){
        // change positiotn
        current = tab;
      }
    }
    
    this.img = {
      current: img,
      get a(){
        return current;
      },
      set a(tab){
        // change tile background image
        current = tab;
      }
    };
    // clone tile from template
   // this.tileObject = 
  }
  moveLeft(){
    
  }
  moveUp(){
    
  }
  divideValue(val){
    this.val /= val;
  }
  multiplyValue(val){
    this.val *= val;
  }
  destroy(){
    
  }
}
export default tile;