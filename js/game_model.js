import table from "./components/table";
class game_model {
  constructor (mode) {
    this.mode = mode;
    this.active = true;
    this.tableIn = null;
    this.loaded = false;
    switch (mode){
      case "hard":
        let tableHard = new table("hard",5,5);
      case "easy":
        let tableEasy = new table("easy", 4,4);
      case "impossible":      
        let tableImpossible = new table("impossible",6,6);
      default:
        return "[internal error]: did not provide a game mode";
        break;
    }
  }
  newGame = (mode) => {
    this.mode = mode;
  }
  playAgain = () => {
    this.newGame(this.mode);
  }

  getProperty = (propName) => {
    return this[propName] != null ? this[propName] : "Property not found"
  }

  changeTableDimensions = (row, col) => {
    this.tableIn.changeDimensions(row, col)
  }
}

export default game_model;