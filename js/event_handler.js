class event_handler {
  on = (event, callback) => {
    if (!this.events[event]){
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  trigger = (event, params) => {
    if (this.events[event]){
      for (i in this.events[event]){
        this[events][i](params);
      }
    }
  }
}
event_handler.events = {};
export default event_handler;