const event = require("events");

const myEvent = new event.EventEmitter();

myEvent.on("firstEvent", () => {
  console.log("this is the first event");
});

myEvent.on("secondEvent", () => {
  console.log("second event is getting called");
});

myEvent.emit("firstEvent");

myEvent.emit("secondEvent");

// Every action that happens in a page is basically an event
// we use EventEmitter() class for events
// we use the emit()  function to fire(trigger) an event
