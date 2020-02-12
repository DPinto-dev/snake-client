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

const handleUserInput = data => {
  if (data === "\u0003") {
    process.exit(0);
  } else if (data === "k" || data === "w") {
    connection.write("Move: up");
    console.log("UP");
  } else if (data === "j" || data === "s") {
    connection.write("Move: down");
    console.log("DOWN");
  } else if (data === "h" || data === "a") {
    connection.write("Move: left");
    console.log("LEFT");
  } else if (data === "l" || data === "d") {
    connection.write("Move: right");
    console.log("RIGHT");
  }
};

module.exports = { setupInput };
