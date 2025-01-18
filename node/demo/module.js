const sum = (a, b) => {
  return a + b;
};

const PORT = 3000;

// Export the entities
module.exports = {
  sum,
  PORT,
};

// it is a single .js file
// it may contain vairable, functions and objects etc.
// a module can export any of the above entities.
// we need to export the module
// so whenever required we can import it using "require"
