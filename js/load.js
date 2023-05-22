import game_model from './game_model.js'
window.requestAnimationFrame = () => {
  const game_Mode = localStorage.getItem('mode') || "easy"
  try {
    const game_Instance = new game_model(game_Mode);
    console.log("GAME LOADED")
  } catch(error){
    alert("[internal error]: check the console for the error")
    console.warn("[internal error]: error while starting game. " + error);
  }
}