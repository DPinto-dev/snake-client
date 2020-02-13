const { playerKEYS } = require("./constants");

// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// global interval
// if !last pressed key && playerKEYS[key] => add new interval
let lastKey, myInter;
const handleUserInput = key => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key !== lastKey && playerKEYS[key]) {
    clearInterval(myInter);
    myInter = setInterval(() => connection.write(playerKEYS[key]), 70);
    lastKey = key;
  }
};

process.on("exit", () => console.log(`Thanks for playing the game.`));

module.exports = { setupInput };
