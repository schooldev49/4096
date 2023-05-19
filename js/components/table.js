import tile from './tile.js';
class table {
  constructor(mode, rows, cols){
    this.rows = rows;
    this.mode = mode;
    this.cols = cols;
    this.tilecount = rows * cols;
    const table = document.getElementById('canvas');
    for (i=0; i<rows; i++){
      for (j=0; j<cols; j++){
        let tileValue = 2;
        const rnum = math.random(1,10);
        if (rnum == 1){
          if (this.mode == "easy"){
            tileValue = 4;
          } else if (this.mode == "hard"){
            tileValue = 1;
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