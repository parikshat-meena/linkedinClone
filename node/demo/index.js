const x = 10;
const y = 11;

const add = (x, y) => {
  console.log(x + y, "value of addition");
};

const subtract = (x, y) => {
  console.log(x - y, "value of subtraction");
};
const multiply = async (x, y) => {
  // async function
  console.log(x * y, "async calling");
  await console.log("await");
};

multiply(x, y); // asychronous calling // js will call this function
add(x, y); // js will call and execute this function
subtract(x, y); // js will call and execute this function
console.log("line after function");

// Blocking or Synchronous calling

// REPL - Read , Evalute and  Print loop
// command for starting REPL is node
// it is used to quickly and easily try sample code of JS
