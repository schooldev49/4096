import tile from './tile.js';
class table {
  constructor(mode, rows, cols){
    this.rows = {
      current: rows,
      get a(){
        return current;
      }
      set a(tab) {
        //transform table
        current = tab;
      }
    };
    this.cols = {
      current: cols,
      get a(){
        return current;
      }
      set a(tab){
        // transform table
        current = tab;
      }
    }
    this.mode = {
      current: mode,
      get a(){
        return current;
      },
      set a(tab){
        // change mode? 
        current = tab;
      }
    };
    this.tilecount = {
      current: rows * cols,
      get a(){
        return current;
      }
      set a(tab){
        // useless
        current = rows * cols;
      }
    }
    // not actually the table..
    const table = document.getElementById('canvas');
    //copy the table template later 
    for (i=0; i<rows; i++){
      for (j=0; j<cols; j++){
        let tileValue = 2;
        const rnum = math.random(1,10);
        if (rnum == 1){
          if (this.mode == "easy"){
            tileValue = 4;
          } else if (this.mode == "hard"){
            tileValue = 2;
          } else if (this.mode == "impossible"){
            tileValue = 1
          } else {
            tileValue = 0.5;
          }
        }
        this.createTile(table, tileValue, i, j);
      }
    }
  }
  changeDimensions = (rowN, colN) => {
    this.rows = rowN;
    this.cols = colN;
    this.tilecount = rowN * colN;
  }
  createTile = (table, value, row, col, image="") => {
    let tile_in = new tile(table, value, row, col, image);
    return tile_in;
  }
  changeMode = (mode) => {
    this.mode = mode;
  }
}



export default table