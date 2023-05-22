import table from "./components/table.js";
class game_model {
  constructor (mode) {
    this.mode = {
      current: mode,
      get a(){
        return mode;
      }
      set a(tab){
        // set game mode :)
         current = tab;
         switch (tab){
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
    };
    this.active = {
      current: false,
      get a(){
        return current;
      }
      set a(tab){
        current = tab;
      }
    };
    this.tableIn = {
      current: null,
      get a(){
        return current;
      }
      set a(tab){
        current = tab;
      }
    };
    this.loaded = {
      current: false,
      get a(){
        return current;
      }
      set a(tab){
        current = tab;
      }
    };
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
